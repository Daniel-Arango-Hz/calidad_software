import React, { useState, useEffect, useRef } from "react";
import { Calculator, ArrowLeft, FileDown } from "lucide-react";
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

  const pdfRef = useRef();


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

    doc.setFontSize(12);
    doc.text(`Aplicación: ${nombreApp}`, 14, 35);
    doc.text(`Descripción: ${descripcionApp}`, 14, 42);
    doc.text(`Tipo: ${tipoApp}`, 14, 49);
    doc.text(`Fecha: ${new Date().toLocaleString()}`, 14, 56);


    doc.text("Resultados Generales:", 14, 70);
    doc.text(`Promedio: ${promedio.toFixed(2)}`, 14, 78);
    doc.text(`Porcentaje de Calidad: ${porcentaje_calidad}%`, 14, 85);
    doc.text(`Clasificación: ${clasificacion}`, 14, 92);


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
    const barHeight = 80; // más alto
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
      alert(" Error al guardar los datos en Supabase.");
    }
  };

  // 🔹 Manejar cambios
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
    <div className="px-6 md:px-20 py-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-4">
        Herramienta de Evaluación
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Evalúa la calidad de tu aplicación educativa con métricas basadas en
        ISO/IEC 25010.
      </p>

      <div className="bg-white shadow-md p-6 rounded-2xl mb-12">
        <h2 className="font-semibold text-lg mb-4">
          Información de la Aplicación
        </h2>
        <input
          type="text"
          placeholder="Nombre de la aplicación"
          value={nombreApp}
          onChange={(e) => setNombreApp(e.target.value)}
          className="w-full border rounded-lg p-2 mb-3"
        />
        <textarea
          placeholder="Descripción..."
          value={descripcionApp}
          onChange={(e) => setDescripcionApp(e.target.value)}
          className="w-full border rounded-lg p-2 mb-3"
        ></textarea>
        <input
          type="text"
          placeholder="Tipo de aplicación (por ejemplo: educativa, gestión, salud...)"
          value={tipoApp}
          onChange={(e) => setTipoApp(e.target.value)}
          className="w-full border rounded-lg p-2"
        />
      </div>

      {metricas.map((m) => (
        <div
          key={m.id}
          className="bg-white shadow-sm p-6 rounded-2xl mb-6 border"
        >
          <div className="flex justify-between mb-3">
            <div>
              <h3 className="font-semibold text-lg">
                {m.nombre}{" "}
                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                  {m.tipo || "General"}
                </span>
              </h3>
              <p className="text-gray-500 text-sm">{m.descripcion}</p>
              <p className="text-gray-500 text-sm mt-1">
                Peso en evaluación: {m.peso}%
              </p>
            </div>
            <span className="text-blue-700 font-bold text-2xl">
              {puntuaciones[m.nombre]?.toFixed(1) || 0}{" "}
              <span className="text-gray-500 text-sm">/ 5</span>
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={puntuaciones[m.nombre] || 0}
            onChange={(e) => handleChangePuntuacion(m.nombre, e.target.value)}
            className="w-full accent-blue-700"
          />

          <textarea
            placeholder="Agrega observaciones sobre esta métrica..."
            value={observaciones[m.nombre] || ""}
            onChange={(e) => handleChangeObservacion(m.nombre, e.target.value)}
            className="w-full border rounded-lg p-2 mt-3"
          ></textarea>
        </div>
      ))}


      <div className="flex justify-between items-center mt-10">
        <Link to="/beneficios">
          <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-100">
            <ArrowLeft className="mr-2" /> Volver a Beneficios
          </button>
        </Link>
        <button
          onClick={guardarEvaluacion}
          className="flex items-center px-6 py-3 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition"
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
            <h2 className="text-2xl font-bold mb-4 text-blue-700 text-center">
              Resultados de la Evaluación ✅
            </h2>
            <p className="text-center text-gray-500 mb-4">
              {new Date().toLocaleString()}
            </p>

            <div className="mb-4 text-center">
              <p><strong>Promedio:</strong> {resultadosFinales.promedio}</p>
              <p><strong>Porcentaje de calidad:</strong> {resultadosFinales.porcentaje_calidad}%</p>
              <p><strong>Clasificación:</strong> {resultadosFinales.clasificacion}</p>
            </div>

            <div className="mb-6">
              <Bar data={chartData} options={chartOptions} />
            </div>

            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-3">Observaciones</h3>
              {metricas.map((m) => (
                <div key={m.id} className="border rounded-lg p-3 mb-2">
                  <p className="font-medium">
                    {m.nombre}: {puntuaciones[m.nombre]} / 5
                  </p>
                  <p className="text-gray-600 text-sm">
                    {observaciones[m.nombre] || "Sin observación"}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-end mt-6 space-x-3">
              <button
                onClick={() => generarPDF(resultadosFinales)}
                className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                <FileDown className="mr-2" /> Descargar PDF
              </button>
              <button
                onClick={() => {
                  setMostrarModal(false);
                  setResultadosFinales(null);
                  setNombreApp("");
                  setDescripcionApp("");
                  setTipoApp("");
              
                  const inicialPuntuaciones = {};
                  const inicialObservaciones = {};
                  metricas.forEach((m) => {
                    inicialPuntuaciones[m.nombre] = 0;
                    inicialObservaciones[m.nombre] = "";
                  });
                  setPuntuaciones(inicialPuntuaciones);
                  setObservaciones(inicialObservaciones);
                }}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Evaluacion;
