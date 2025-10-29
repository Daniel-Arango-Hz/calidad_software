import React, { useState, useEffect, useRef } from "react";
import { Calculator, ArrowLeft, FileDown, CheckCircle, Shield, Lock, AlertTriangle, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Chart } from "chart.js/auto";

import {
  Bar,
} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Evaluacion = () => {
  const [metricas, setMetricas] = useState([]);
  const [puntuaciones, setPuntuaciones] = useState({});
  const [observaciones, setObservaciones] = useState({});
  const [loading, setLoading] = useState(true);
  const [nombreApp, setNombreApp] = useState("");
  const [descripcionApp, setDescripcionApp] = useState("");
  const [tipoApp, setTipoApp] = useState("");

  const [resultadosFinales, setResultadosFinales] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [activeTab, setActiveTab] = useState("general");
  const [url, setUrl] = useState("");
  const [performanceMetrics, setPerformanceMetrics] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const pdfRef = useRef();

 
  const PAGESPEED_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;


  useEffect(() => {
    const fetchMetricas = async () => {
      const { data, error } = await supabase.from("metricas").select("*");
      if (error) console.error("Error cargando métricas:", error);
      else {
        setMetricas(data);
        const inicialPuntuaciones = {};
        const inicialObservaciones = {};
        data.forEach((m) => {
          inicialPuntuaciones[m.nombre] = 0;
          inicialObservaciones[m.nombre] = "";
        });
        setPuntuaciones(inicialPuntuaciones);
        setObservaciones(inicialObservaciones);
      }
      setLoading(false);
    };
    fetchMetricas();
  }, []);


 
  const evaluarURL = async () => {
    if (!url) {
      setApiError("Por favor, ingrese una URL para evaluar");
      return;
    }

    if (!PAGESPEED_API_KEY) {
      setApiError("Se requiere una API key de Google PageSpeed Insights. Por favor, configure la API key.");
      return;
    }

    setIsAnalyzing(true);
    setApiError(null);

    try {
      const response = await fetch(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
          url
        )}&key=${PAGESPEED_API_KEY}&category=performance&category=seo&category=accessibility&category=best-practices&category=pwa`
      );

      const data = await response.json();

      if (data.error) {
        setApiError(data.error.message);
        return;
      }

      if (!data.lighthouseResult) {
        setApiError("No se encontraron resultados válidos. Verifique la URL.");
        return;
      }

      setPerformanceMetrics(data.lighthouseResult);
    } catch (error) {
      setApiError("Error al conectar con la API: " + error.message);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const calcularResultados = () => {
    const totalPeso = metricas.reduce((acc, m) => acc + (m.peso || 1), 0);
    const total = metricas.reduce(
      (acc, m) => acc + (puntuaciones[m.nombre] || 0) * (m.peso / totalPeso),
      0
    );
    const promedio = Number(total.toFixed(2));
    const porcentaje_calidad = Number(((promedio / 5) * 100).toFixed(2));
    let clasificacion = "Crítico";
    if (promedio >= 4.5) clasificacion = "Excelente";
    else if (promedio >= 4.0) clasificacion = "Bueno";
    else if (promedio >= 3.0) clasificacion = "Aceptable";
    else if (promedio >= 2.0) clasificacion = "Deficiente";
    return { promedio, porcentaje_calidad, clasificacion };
  };




const generarPDF = async (resultados) => {
  const { promedio, porcentaje_calidad, clasificacion } = resultados;

  try {
   
    const doc = new jsPDF("p", "mm", "a4");
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();


    doc.setFontSize(18);
    doc.text("Reporte de Evaluación de Calidad de Software", 14, 20);

 
    doc.setFontSize(14);
    doc.text("Información de la Aplicación", 14, 35);
    
    doc.setFontSize(12);
    doc.text(`Aplicación: ${nombreApp}`, 14, 50);
    doc.text(`Descripción: ${descripcionApp}`, 14, 57);
    doc.text(`Tipo: ${tipoApp}`, 14, 64);
    doc.text(`Fecha: ${new Date().toLocaleString()}`, 14, 71);

 
    doc.setFontSize(14);
    doc.text("Resultados Generales", 14, 90);
    
    doc.setFontSize(12);
    doc.text(`Promedio: ${promedio.toFixed(2)}`, 14, 105);
    doc.text(`Porcentaje de Calidad: ${porcentaje_calidad}%`, 14, 112);
    doc.text(`Clasificación: ${clasificacion}`, 14, 119);

 
    if (performanceMetrics && performanceMetrics.categories) {
      doc.addPage();
      doc.setFontSize(14);
      doc.text("Métricas de Rendimiento Web", 14, 20);
      
   
      if (url) {
        doc.setFontSize(12);
        doc.text(`URL evaluada: ${url}`, 14, 35);
      }
      
      doc.setFontSize(12);
      let yPos = 50;
     
      const pageSpeedData = Object.entries(performanceMetrics.categories).map(([key, val]) => [
        val.title,
        `${Math.round((val.score || 0) * 100)}%`
      ]);

      autoTable(doc, {
        startY: yPos,
        head: [["Métrica", "Puntuación"]],
        body: pageSpeedData,
        styles: { fontSize: 10, cellPadding: 5 },
        headStyles: { fillColor: [37, 99, 235] },
        columnStyles: {
          0: { cellWidth: 100 },
          1: { cellWidth: 50, halign: 'center' }
        },
      });

      if (url) {
        const finalY = doc.lastAutoTable.finalY || yPos;
        doc.setFontSize(10);
        doc.text(`URL evaluada: ${url}`, 14, finalY + 20);
      }
    }

    
    doc.addPage();
    doc.setFontSize(14);
    doc.text("Análisis Gráfico de Métricas", 14, 20);

    const canvasBar = document.createElement("canvas");
    canvasBar.width = 600;
    canvasBar.height = 300;
    const ctxBar = canvasBar.getContext("2d");

    new Chart(ctxBar, {
      type: "bar",
      data: {
        labels: metricas.map((m) => m.nombre),
        datasets: [
          {
            label: "Puntuaciones",
            data: metricas.map((m) => puntuaciones[m.nombre]),
            backgroundColor: "#4e79a7",
          },
        ],
      },
      options: {
        responsive: false,
        scales: { y: { beginAtZero: true, max: 5 } },
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: "Puntuaciones por Métrica",
            font: { size: 14 },
          },
        },
      },
    });

    await new Promise((r) => setTimeout(r, 500));
    const chartImgBar = canvasBar.toDataURL("image/png");

    const barY = 100;
    const barHeight = 80;
    doc.addImage(chartImgBar, "PNG", 14, barY, pageWidth - 28, barHeight);

    const canvasPie = document.createElement("canvas");
    canvasPie.width = 400;
    canvasPie.height = 300;
    const ctxPie = canvasPie.getContext("2d");

    new Chart(ctxPie, {
      type: "pie",
      data: {
        labels: metricas.map((m) => m.nombre),
        datasets: [
          {
            data: metricas.map((m) => puntuaciones[m.nombre]),
            backgroundColor: [
              "#4e79a7",
              "#f28e2b",
              "#e15759",
              "#76b7b2",
              "#59a14f",
              "#edc949",
              "#af7aa1",
            ],
          },
        ],
      },
      options: {
        responsive: false,
        plugins: {
          title: {
            display: true,
            text: "Distribución de Puntuaciones",
            font: { size: 14 },
          },
          legend: {
            position: "right",
            labels: { boxWidth: 12, font: { size: 10 } },
          },
        },
      },
    });

    await new Promise((r) => setTimeout(r, 500));
    const chartImgPie = canvasPie.toDataURL("image/png");

    const pieY = barY + barHeight + 20;
    const pieHeight = 65;

    if (pieY + pieHeight + 30 > pageHeight) {
      doc.addPage();
      doc.text("Distribución de Métricas", 14, 20);
      doc.addImage(
        chartImgPie,
        "PNG",
        (pageWidth - (pageWidth - 60)) / 2, 
        35,
        pageWidth - 60,
        pieHeight
      );
    } else {
      doc.addImage(
        chartImgPie,
        "PNG",
        (pageWidth - (pageWidth - 60)) / 2,
        pieY,
        pageWidth - 60,
        pieHeight
      );
    }

   
    let tablaY = pieY + pieHeight + 30;
    if (tablaY + 40 > pageHeight) {
      doc.addPage();
      tablaY = 20;
    }

    const tablaDatos = metricas.map((m) => [
      m.nombre,
      puntuaciones[m.nombre].toFixed(1),
      observaciones[m.nombre] || "—",
    ]);

    autoTable(doc, {
      startY: tablaY,
      head: [["Métrica", "Puntuación", "Observaciones"]],
      body: tablaDatos,
      styles: { fontSize: 9, cellPadding: 2 },
    });


    doc.save(`Evaluacion_${nombreApp}.pdf`);
  } catch (err) {
    console.error("Error al generar PDF:", err);
    alert(" No se pudo generar el PDF. Revisa la consola.");
  }
};



  const guardarEvaluacion = async () => {
    if (!nombreApp || !descripcionApp || !tipoApp) {
      alert("Por favor completa todos los campos de la aplicación.");
      return;
    }

    setIsAnalyzing(true);
    setIsSaving(true);
    let metricsResult = null;

    if (url) {
      try {
        const response = await fetch(
          `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
            url
          )}&key=${PAGESPEED_API_KEY}&category=performance&category=seo&category=accessibility&category=best-practices&category=pwa`
        );

        const data = await response.json();

        if (data.error) {
          setApiError(data.error.message);
        } else if (data.lighthouseResult) {
          metricsResult = data.lighthouseResult;
          setPerformanceMetrics(metricsResult);
        }
      } catch (error) {
        setApiError("Error al conectar con la API: " + error.message);
      }
    }

    const { promedio, porcentaje_calidad, clasificacion } = calcularResultados();

    try {
      const { data: appData, error: appError } = await supabase
        .from("aplicaciones")
        .insert([{ nombre: nombreApp, descripcion: descripcionApp, tipo: tipoApp }])
        .select()
        .single();
      if (appError) throw appError;
      const appId = appData.id;

      const { data: evalData, error: evalError } = await supabase
        .from("evaluaciones")
        .insert([{ id_aplicacion: appId, promedio, porcentaje_calidad, clasificacion }])
        .select()
        .single();
      if (evalError) throw evalError;
      const evalId = evalData.id;

      const resultados = metricas.map((m) => ({
        id_evaluacion: evalId,
        id_metrica: m.id,
        puntuacion: puntuaciones[m.nombre],
        observacion: observaciones[m.nombre] || "",
      }));

      const { error: resError } = await supabase
        .from("resultados_metricas")
        .insert(resultados);
      if (resError) throw resError;

      setResultadosFinales({ promedio, porcentaje_calidad, clasificacion });
      setMostrarModal(true);
    } catch (err) {
      console.error("Error al guardar evaluación:", err.message);
      alert("Error al guardar los datos en Supabase.");
    } finally {
      setIsAnalyzing(false);
      setIsSaving(false);
    }
  };

  
  const handleChangePuntuacion = (nombre, valor) => {
    setPuntuaciones({ ...puntuaciones, [nombre]: Number(valor) });
  };
  const handleChangeObservacion = (nombre, valor) => {
    setObservaciones({ ...observaciones, [nombre]: valor });
  };

  if (loading)
    return (
      <div className="text-center py-20 text-gray-500">Cargando métricas...</div>
    );


  const chartData = {
    labels: metricas.map((m) => m.nombre),
    datasets: [
      {
        label: "Puntuación (0-5)",
        data: metricas.map((m) => puntuaciones[m.nombre]),
        backgroundColor: "rgba(37, 99, 235, 0.6)",
      },
    ],
  };
  const chartOptions = {
    responsive: true,
    scales: { y: { min: 0, max: 5, ticks: { stepSize: 1 } } },
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen px-6 md:px-20 py-10 relative">
      {/* Loading Overlay */}
      {(isSaving || isAnalyzing) && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-lg font-semibold text-gray-700">
              {isAnalyzing ? "Analizando rendimiento web..." : "Guardando evaluación..."}
            </p>
            <p className="text-sm text-gray-500 mt-2">Por favor, espere un momento</p>
          </div>
        </div>
      )}
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <div className="p-3 bg-blue-100 rounded-full mr-4">
            <Calculator className="h-6 w-6 text-blue-700" />
          </div>
          <h1 className="text-4xl font-extrabold text-center">
            Herramienta de Evaluación
          </h1>
        </div>
        <p className="text-center text-gray-600 mb-8">
          Evalúa la calidad de tu aplicación educativa usando métricas basadas en
          las normas que se describen en la sección de Beneficios: <strong>ISO 9001</strong>, <strong>ISO 27001</strong>, <strong>ISO 27010</strong> y <strong>ISO/IEC 25010</strong> (familia ISO 25000).
        </p>

        <div className="bg-white shadow-lg p-8 rounded-2xl mb-12 border border-gray-100">
          <h2 className="font-semibold text-xl mb-4 flex items-center">
            <Info className="h-5 w-5 text-blue-600 mr-2" />
            Información de la Aplicación
          </h2>
          <input
            type="text"
            placeholder="Nombre de la aplicación"
            value={nombreApp}
            onChange={(e) => setNombreApp(e.target.value)}
            className="w-full border rounded-lg p-3 mb-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
          <textarea
            placeholder="Descripción..."
            value={descripcionApp}
            onChange={(e) => setDescripcionApp(e.target.value)}
            className="w-full border rounded-lg p-3 mb-4 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            rows="3"
          ></textarea>
          <select
            value={tipoApp}
            onChange={(e) => setTipoApp(e.target.value)}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          >
            <option value="">Seleccione el tipo de aplicación</option>
            <option value="Educativa">Educativa</option>
            <option value="Gestión">Gestión</option>
            <option value="Salud">Salud</option>
            <option value="Finanzas">Finanzas</option>
            <option value="Comercio electrónico">Comercio electrónico</option>
            <option value="Redes sociales">Redes sociales</option>
            <option value="Productividad">Productividad</option>
            <option value="Entretenimiento">Entretenimiento</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

       
        <div className="bg-white shadow-lg p-8 rounded-2xl mb-12 border border-gray-100">
          <h2 className="font-semibold text-xl mb-4 flex items-center">
            <Shield className="h-5 w-5 text-blue-600 mr-2" />
            Evaluación de Rendimiento Web
          </h2>

          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Ingrese la URL del sitio web a evaluar (opcional)"
                className="flex-1 border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              />
            </div>

            {apiError && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <div className="flex">
                  <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                  <p className="text-sm text-red-700">{apiError}</p>
                </div>
              </div>
            )}
          </div>

          {performanceMetrics && (
            <div className="mt-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-bold text-blue-800 mb-4 text-lg">Resumen General:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(performanceMetrics.categories || {}).map(([key, val]) => (
                    <div key={key} className="bg-white rounded-lg shadow-sm p-4 transform hover:-translate-y-1 transition-all duration-300">
                      <p className="text-xs uppercase text-gray-500 mb-1">{val.title}</p>
                      <p className="text-2xl font-bold text-blue-700">
                        {Math.round((val.score || 0) * 100)}%
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ width: `${Math.round((val.score || 0) * 100)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex mb-6 border-b">
          <div className="py-3 px-6 font-medium text-lg text-blue-700 border-b-2 border-blue-700">
            Métricas Generales
          </div>
        </div>

        {metricas.map((m) => (
          <div
            key={m.id}
            className="bg-gradient-to-r from-white to-blue-50 shadow-md p-6 rounded-xl mb-6 border-l-4 border-blue-500 border-t border-r border-b border-gray-200 hover:shadow-lg transition-all duration-300 hover:from-blue-50 hover:to-white"
          >
            <div className="mb-4">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-xl text-blue-800">
                  {m.nombre}
                  <span className="ml-2 text-xs text-white bg-blue-600 px-2 py-0.5 rounded-full shadow-sm">
                    {m.tipo || "Funcional"}
                  </span>
                </h3>
                <div className="bg-blue-600 text-white font-bold text-2xl px-3 py-1 rounded-lg shadow-sm">
                  {puntuaciones[m.nombre]?.toFixed(1) || 0}
                  <span className="text-blue-100 text-sm font-normal">/5</span>
                </div>
              </div>
              <p className="text-gray-700 text-sm mt-2">{m.descripcion}</p>
              <p className="text-blue-700 text-sm font-medium mt-2">
                Peso en evaluación: {m.peso}%
              </p>
            </div>

            <div className="relative h-3 bg-gray-200 rounded-full mb-6 mt-4 shadow-inner">
              <input
                type="range"
                min="0"
                max="5"
                step="0.1"
                value={puntuaciones[m.nombre] || 0}
                onChange={(e) => handleChangePuntuacion(m.nombre, e.target.value)}
                className="absolute w-full h-3 opacity-0 cursor-pointer z-10"
              />
              <div 
                className="absolute left-0 top-0 h-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" 
                style={{ width: `${(puntuaciones[m.nombre] / 5) * 100}%` }}
              ></div>
              <div 
                className="absolute -top-1.5 h-6 w-6 bg-white rounded-full border-2 border-blue-600 shadow-lg" 
                style={{ left: `calc(${(puntuaciones[m.nombre] / 5) * 100}% - 12px)` }}
              ></div>
            </div>

            <textarea
              placeholder="Agrega observaciones sobre esta métrica..."
              value={observaciones[m.nombre] || ""}
              onChange={(e) => handleChangeObservacion(m.nombre, e.target.value)}
              className="w-full border rounded-lg p-3 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all"
              rows="2"
            ></textarea>
          </div>
        ))}


        <div className="flex justify-between items-center mt-10">
          <Link to="/beneficios">
            <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-100 transition-all duration-300">
              <ArrowLeft className="mr-2" /> Volver a Beneficios
            </button>
          </Link>
          <button
            onClick={guardarEvaluacion}
            className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            <Calculator className="mr-2" /> Guardar Evaluación
          </button>
        </div>


        {mostrarModal && resultadosFinales && (
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex justify-center items-center z-50">
            <div
              ref={pdfRef}
              className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-3xl overflow-y-auto max-h-[90vh]"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <CheckCircle className="h-6 w-6 text-blue-700" />
                </div>
                <h2 className="text-2xl font-bold text-blue-700">
                  Resultados de la Evaluación
                </h2>
              </div>
              <p className="text-center text-gray-500 mb-4">
                {new Date().toLocaleString()}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-sm text-center">
                  <p className="text-sm font-medium text-blue-800 mb-2">Promedio General</p>
                  <p className="text-4xl font-bold text-blue-700 mb-1">
                    {resultadosFinales.promedio.toFixed(2)}
                  </p>
                  <p className="text-xs text-blue-600">Escala 0-5</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-sm text-center">
                  <p className="text-sm font-medium text-green-800 mb-2">Porcentaje de Calidad</p>
                  <p className="text-4xl font-bold text-green-700 mb-1">
                    {resultadosFinales.porcentaje_calidad}%
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                    <div 
                      className="bg-green-600 h-2.5 rounded-full" 
                      style={{ width: `${resultadosFinales.porcentaje_calidad}%` }}
                    ></div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl shadow-sm text-center">
                  <p className="text-sm font-medium text-purple-800 mb-2">Clasificación</p>
                  <p className="text-4xl font-bold text-purple-700 mb-1">
                    {resultadosFinales.clasificacion}
                  </p>
                  <p className="text-xs text-purple-600">Nivel de calidad</p>
                </div>
              </div>

              {performanceMetrics && (
                <div className="mb-8">
                  <h3 className="font-semibold text-lg mb-4 flex items-center">
                    <Shield className="h-5 w-5 text-blue-600 mr-2" />
                    Métricas de Rendimiento Web
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {Object.entries(performanceMetrics.categories || {}).map(([key, val]) => (
                      <div key={key} className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
                        <p className="text-xs uppercase text-gray-500 mb-1">{val.title}</p>
                        <p className="text-2xl font-bold text-blue-700">
                          {Math.round((val.score || 0) * 100)}%
                        </p>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${Math.round((val.score || 0) * 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <Bar data={chartData} options={{
                  ...chartOptions,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  scales: { 
                    y: { 
                      beginAtZero: true, 
                      max: 5,
                      ticks: { stepSize: 1 }
                    } 
                  }
                }} />
              </div>

              <div className="mt-6">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <Info className="h-5 w-5 text-blue-600 mr-2" />
                  Observaciones
                </h3>
                <div className="space-y-4 max-h-64 overflow-y-auto p-2">
                  {metricas.map((m) => (
                    <div key={m.id} className="border-l-4 border-blue-500 pl-4 py-2">
                      <div className="flex items-center mb-1">
                        <p className="font-medium">
                          {m.nombre}
                        </p>
                        <div className="ml-3 px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                          {puntuaciones[m.nombre]} / 5
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {observaciones[m.nombre] || "Sin observación"}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end mt-6 space-x-3">
                <button
                  onClick={() => generarPDF(resultadosFinales)}
                  className="flex items-center bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <FileDown className="mr-2" /> Descargar PDF
                </button>
                <button
                  onClick={() => {
                    // Limpiar modal y resultados
                    setMostrarModal(false);
                    setResultadosFinales(null);
                    
                    // Limpiar información de la aplicación
                    setNombreApp("");
                    setDescripcionApp("");
                    setTipoApp("");
                    
                    // Limpiar URL y resultados de PageSpeed
                    setUrl("");
                    setPerformanceMetrics(null);
                    setApiError(null);
                
                    // Reiniciar puntuaciones y observaciones
                    const inicialPuntuaciones = {};
                    const inicialObservaciones = {};
                    metricas.forEach((m) => {
                      inicialPuntuaciones[m.nombre] = 0;
                      inicialObservaciones[m.nombre] = "";
                    });
                    setPuntuaciones(inicialPuntuaciones);
                    setObservaciones(inicialObservaciones);
                  }}
                  className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition-all duration-300"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Evaluacion;
