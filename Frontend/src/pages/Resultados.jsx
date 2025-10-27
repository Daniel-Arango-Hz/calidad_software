import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { ChartBar } from "lucide-react";

export default function Resultados() {
  const [proyectos, setProyectos] = useState([]);
  const [seleccionado, setSeleccionado] = useState("");
  const [detalles, setDetalles] = useState(null);
  const [metricas, setMetricas] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchProyectos = async () => {
      const { data, error } = await supabase
        .from("aplicaciones")
        .select("id, nombre");
      if (error) console.error("Error al cargar proyectos:", error);
      else setProyectos(data);
    };
    fetchProyectos();
  }, []);


  const cargarDetalles = async (idProyecto) => {
    setSeleccionado(idProyecto);
    setLoading(true);

    try {
          
      const { data: evaluaciones, error: evalError } = await supabase
        .from("evaluaciones")
        .select("*")
        .eq("id_aplicacion", idProyecto)
        .order("fecha", { ascending: false })
        .limit(1);

      if (evalError) throw evalError;
      if (!evaluaciones || evaluaciones.length === 0) {
        setDetalles(null);
        setMetricas([]);
        setLoading(false);
        return;
      }

      const evaluacion = evaluaciones[0];
      setDetalles(evaluacion);

  
      const { data: resultados, error: resError } = await supabase
        .from("resultados_metricas")
        .select(
          `
          puntuacion,
          observacion,
          metricas(nombre, descripcion)
        `
        )
        .eq("id_evaluacion", evaluacion.id);

      if (resError) throw resError;

      setMetricas(resultados);
    } catch (err) {
      console.error("Error al cargar detalles:", err);
    }

    setLoading(false);
  };

  return (
    <section className="max-w-5xl mx-auto py-16 px-6 bg-gradient-to-b from-blue-50 to-white">

      <div className="text-center mb-12">
        <span className="inline-block px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold mb-4 shadow-md transform hover:scale-105 transition-transform">
          Resultados
        </span>
        <h2 className="text-5xl font-extrabold text-gray-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
          Evaluación de Aplicativos Educativos
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
          Selecciona un proyecto para visualizar sus resultados de evaluación de
          calidad, calculados según las métricas ISO/IEC.
        </p>
      </div>

   
      <div className="bg-white p-8 rounded-2xl shadow-lg mb-12 border-t-4 border-blue-500 transform hover:shadow-xl transition-all">
        <label className="block text-gray-800 font-semibold mb-3 text-lg">
          Selecciona un Proyecto
        </label>
        <select
          className="w-full border-2 border-gray-200 rounded-xl p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          onChange={(e) => cargarDetalles(e.target.value)}
        >
          <option value="">-- Selecciona una aplicación --</option>
          {proyectos.map((p) => (
            <option key={p.id} value={p.id}>
              {p.nombre}
            </option>
          ))}
        </select>
      </div>


      {loading && (
        <div className="text-center text-gray-500 py-10">
          Cargando evaluación...
        </div>
      )}

    
      {!loading && detalles && (
        <>
       
          <div className="bg-white shadow-lg rounded-2xl p-8 mb-10 border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-3xl font-bold text-blue-800">
                  {proyectos.find((p) => p.id === seleccionado)?.nombre}
                </h3>
                <p className="text-gray-600 mt-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Evaluación realizada el{" "}
                  {new Date(detalles.fecha).toLocaleDateString()}
                </p>
              </div>
              <span className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg text-sm font-medium shadow-md flex items-center gap-2 transform hover:translate-y-[-2px] transition-transform">
                <ChartBar size={18} /> Resultados
              </span>
            </div>

        
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-md border border-blue-200">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-4xl font-bold text-blue-700">
                  {detalles.promedio?.toFixed(2)}
                </p>
                <p className="text-gray-700 font-medium mt-2">
                  Calificación Final / 5.00
                </p>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl shadow-md border border-teal-200">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-600 text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                  </svg>
                </div>
                <p className="text-4xl font-bold text-teal-700">
                  {detalles.porcentaje_calidad?.toFixed(1)}%
                </p>
                <p className="text-gray-700 font-medium mt-2">Porcentaje de Calidad</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-md border border-green-200">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600 text-white mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-3xl font-bold text-green-700">
                  {detalles.clasificacion}
                </p>
                <p className="text-gray-600 text-sm">Clasificación General</p>
              </div>
            </div>
          </div>

        
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-100 mb-10">
            <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Resultados por Métrica
            </h3>
            {metricas.length > 0 ? (
              <div className="space-y-6">
                {metricas.map((m, i) => (
                  <div
                    key={i}
                    className="border-b border-gray-100 pb-6 last:border-0 last:pb-0 hover:bg-blue-50 p-4 rounded-xl transition-colors"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-semibold text-lg text-gray-800">
                        {m.metricas?.nombre}
                      </h4>
                      <span className="bg-blue-600 text-white font-bold px-3 py-1 rounded-lg">
                        {m.puntuacion?.toFixed(1)} / 5
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      {m.metricas?.descripcion}
                    </p>
                    {m.observacion && (
                      <div className="bg-blue-50 p-4 rounded-lg text-gray-700 border-l-4 border-blue-500">
                        <span className="font-semibold text-blue-800">Observación:</span>{" "}
                        {m.observacion}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-sm">
                No hay resultados de métricas para esta evaluación.
              </p>
            )}
          </div>

        
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 shadow-sm">
            <h4 className="text-xl font-semibold text-gray-800 mb-3">
              Conclusiones
            </h4>
            <p className="text-gray-700 mb-2">
              La aplicación obtuvo una calificación total de{" "}
              <span className="font-semibold text-blue-700">
                {detalles.promedio?.toFixed(2)} / 5.00
              </span>
              , equivalente a un nivel de calidad{" "}
              <span className="font-semibold text-green-700">
                {detalles.clasificacion}
              </span>
              .
            </p>
            <p className="text-gray-700 mb-4">
              Este análisis cuantitativo permite identificar fortalezas y áreas
              de mejora dentro del desarrollo del software educativo.
            </p>
            
            <div className="overflow-x-auto">
              <h5 className="text-lg font-semibold text-gray-800 mb-3">
                Tabla de Clasificación y Recomendaciones
              </h5>
              <table className="min-w-full bg-white rounded-lg overflow-hidden border border-blue-200">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Clasificación</th>
                    <th className="px-4 py-3 text-left">Porcentaje(%)</th>
                    <th className="px-4 py-3 text-left">Recomendación técnica y estratégica</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-blue-50">
                    <td className="px-4 py-3 font-semibold text-green-700">Excelente</td>
                    <td className="px-4 py-3">&gt; 85%</td>
                    <td className="px-4 py-3">Mantener prácticas actuales. Documentar procesos exitosos. Compartir como referencia para otros equipos.</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="px-4 py-3 font-semibold text-blue-700">Bueno</td>
                    <td className="px-4 py-3">60% – 85%</td>
                    <td className="px-4 py-3">Revisar métricas con puntuación baja. Aplicar mejoras incrementales. Priorizar refactorización o pruebas adicionales.</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="px-4 py-3 font-semibold text-yellow-600">Aceptable</td>
                    <td className="px-4 py-3">50% – 60%</td>
                    <td className="px-4 py-3">Realizar revisión técnica completa. Identificar cuellos de botella. Considerar rediseño parcial o capacitación.</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="px-4 py-3 font-semibold text-red-600">Deficiente / Crítico</td>
                    <td className="px-4 py-3">≤ 50%</td>
                    <td className="px-4 py-3">Activar plan de mejora urgente. Reunir equipo técnico para análisis profundo. Redefinir arquitectura o procesos clave.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
