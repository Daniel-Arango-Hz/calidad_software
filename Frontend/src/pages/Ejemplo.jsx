import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { ChartBar } from "lucide-react";

export default function Ejemplo() {
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
    <section className="max-w-5xl mx-auto py-16 px-6 bg-gradient-to-b from-gray-50 to-white">

      <div className="text-center mb-10">
        <span className="inline-block px-4 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-3">
          Ejemplo Práctico
        </span>
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Evaluación de Aplicativo Educativo
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Selecciona un proyecto para visualizar sus resultados de evaluación de
          calidad, calculados según las métricas ISO/IEC 25010.
        </p>
      </div>

   
      <div className="bg-white p-6 rounded-2xl shadow-md mb-10">
        <label className="block text-gray-700 font-medium mb-2">
          Selecciona un Proyecto
        </label>
        <select
          className="w-full border rounded-lg p-2"
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
       
          <div className="bg-white shadow-md rounded-2xl p-6 mb-10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {proyectos.find((p) => p.id === seleccionado)?.nombre}
                </h3>
                <p className="text-gray-600 mt-1">
                  Evaluación realizada el{" "}
                  {new Date(detalles.fecha).toLocaleDateString()}
                </p>
              </div>
              <span className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium shadow-sm flex items-center gap-2">
                <ChartBar size={16} /> Resultados
              </span>
            </div>

        
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mt-6">
              <div className="bg-blue-50 p-4 rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-blue-700">
                  {detalles.promedio?.toFixed(2)}
                </p>
                <p className="text-gray-600 text-sm">
                  Calificación Final / 5.00
                </p>
              </div>
              <div className="bg-teal-50 p-4 rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-teal-700">
                  {detalles.porcentaje_calidad?.toFixed(1)}%
                </p>
                <p className="text-gray-600 text-sm">Porcentaje de Calidad</p>
              </div>
              <div className="bg-green-50 p-4 rounded-xl shadow-sm">
                <p className="text-2xl font-bold text-green-700">
                  {detalles.clasificacion}
                </p>
                <p className="text-gray-600 text-sm">Clasificación General</p>
              </div>
            </div>
          </div>

        
          <div className="bg-white shadow-md rounded-2xl p-6 mb-10">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">
              Resultados por Métrica
            </h4>
            {metricas.length > 0 ? (
              <div className="space-y-3 text-gray-700">
                {metricas.map((m, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b pb-2"
                  >
                    <span>
                      {m.metricas?.nombre} — {m.metricas?.descripcion}
                    </span>
                    <span className="font-semibold text-blue-700">
                      {m.puntuacion?.toFixed(1)} / 5.0
                    </span>
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
            <p className="text-gray-700">
              Este análisis cuantitativo permite identificar fortalezas y áreas
              de mejora dentro del desarrollo del software educativo.
            </p>
          </div>
        </>
      )}
    </section>
  );
}
