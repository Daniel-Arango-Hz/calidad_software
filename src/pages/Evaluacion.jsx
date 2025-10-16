import React, { useState } from "react";
import { Calculator, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Evaluacion = () => {
  // Inicializamos las métricas
  const [puntuaciones, setPuntuaciones] = useState({
    funcionalidad: 0,
    usabilidad: 0,
    eficiencia: 0,
    mantenibilidad: 0,
    portabilidad: 0,
    seguridad: 0,
    fiabilidad: 0,
    compatibilidad: 0,
  });

  // Definimos las métricas y sus pesos
  const metricas = [
    {
      clave: "funcionalidad",
      nombre: "Funcionalidad",
      descripcion: "El software cumple con los requisitos funcionales establecidos.",
      peso: 15,
      tipo: "Funcional",
    },
    {
      clave: "usabilidad",
      nombre: "Usabilidad",
      descripcion: "Facilidad con la que los usuarios pueden aprender y utilizar el sistema.",
      peso: 10,
      tipo: "Experiencia",
    },
    {
      clave: "eficiencia",
      nombre: "Eficiencia",
      descripcion: "Rendimiento relativo a la cantidad de recursos utilizados bajo condiciones establecidas.",
      peso: 10,
      tipo: "Técnica",
    },
    {
      clave: "mantenibilidad",
      nombre: "Mantenibilidad",
      descripcion: "Facilidad con la que el software puede ser modificado para corregir o mejorar.",
      peso: 10,
      tipo: "Técnica",
    },
    {
      clave: "portabilidad",
      nombre: "Portabilidad",
      descripcion: "Capacidad del software para ser transferido de un entorno a otro.",
      peso: 10,
      tipo: "Adaptabilidad",
    },
    {
      clave: "seguridad",
      nombre: "Seguridad",
      descripcion: "Protección del software frente a accesos no autorizados o pérdida de datos.",
      peso: 15,
      tipo: "Técnica",
    },
    {
      clave: "fiabilidad",
      nombre: "Fiabilidad",
      descripcion: "Capacidad del sistema para mantener su rendimiento sin fallos bajo condiciones normales.",
      peso: 15,
      tipo: "Estabilidad",
    },
    {
      clave: "compatibilidad",
      nombre: "Compatibilidad",
      descripcion: "Capacidad del software para interactuar con otros sistemas sin conflictos.",
      peso: 15,
      tipo: "Interoperabilidad",
    },
  ];

  // Calcular calificación final ponderada
  const calcularFinal = () => {
    const totalPeso = metricas.reduce((acc, m) => acc + m.peso, 0);
    const total =
      metricas.reduce(
        (acc, m) => acc + puntuaciones[m.clave] * (m.peso / 100),
        0
      ) * (100 / totalPeso);

    alert(`⭐ Calificación final: ${total.toFixed(2)} / 5`);
  };

  // Actualizar valor de una métrica
  const handleChange = (clave, valor) => {
    setPuntuaciones({ ...puntuaciones, [clave]: Number(valor) });
  };

  return (
    <div className="px-6 md:px-20 py-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-4">
        Herramienta de Evaluación
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Evalúa la calidad de tu aplicación educativa con métricas cuantitativas
        basadas en los estándares ISO/IEC 25010.
      </p>

      {/* Información del software */}
      <div className="bg-white shadow-md p-6 rounded-2xl mb-12">
        <h2 className="font-semibold text-lg mb-4">
          Información de la Aplicación
        </h2>
        <input
          type="text"
          placeholder="Nombre de la aplicación"
          className="w-full border rounded-lg p-2 mb-3"
        />
        <textarea
          placeholder="Descripción..."
          className="w-full border rounded-lg p-2"
        ></textarea>
      </div>

      {/* Renderizar todas las métricas */}
      {metricas.map((m) => (
        <div
          key={m.clave}
          className="bg-white shadow-sm p-6 rounded-2xl mb-6 border"
        >
          <div className="flex justify-between mb-3">
            <div>
              <h3 className="font-semibold text-lg">
                {m.nombre}{" "}
                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                  {m.tipo}
                </span>
              </h3>
              <p className="text-gray-500 text-sm">{m.descripcion}</p>
              <p className="text-gray-500 text-sm mt-1">
                Peso en evaluación: {m.peso}%
              </p>
            </div>
            <span className="text-blue-700 font-bold text-2xl">
              {puntuaciones[m.clave].toFixed(1)}{" "}
              <span className="text-gray-500 text-sm">/ 5</span>
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={puntuaciones[m.clave]}
            onChange={(e) => handleChange(m.clave, e.target.value)}
            className="w-full accent-blue-700"
          />

          <textarea
            placeholder="Agrega observaciones sobre esta métrica..."
            className="w-full border rounded-lg p-2 mt-3"
          ></textarea>
        </div>
      ))}

      {/* Botones */}
      <div className="flex justify-between items-center mt-10">
        <Link to="/beneficios">
          <button className="flex items-center px-4 py-2 border rounded-lg hover:bg-gray-100">
            <ArrowLeft className="mr-2" /> Volver a Beneficios
          </button>
        </Link>
        <button
          onClick={calcularFinal}
          className="flex items-center px-6 py-3 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition"
        >
          <Calculator className="mr-2" /> Calcular Calificación Final
        </button>
      </div>
    </div>
  );
};

export default Evaluacion;
