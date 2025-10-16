export default function Ejemplo() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
      {/* Encabezado */}
      <div className="text-center mb-10">
        <span className="inline-block px-4 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-3">
          Ejemplo Práctico
        </span>
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Evaluación de Aplicativo Educativo
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          A continuación, se presenta un ejemplo de evaluación de calidad de software
          aplicado a una plataforma educativa, siguiendo las métricas ISO/IEC 25010.
        </p>
      </div>

      {/* Información del aplicativo */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800">
              Aula Interactiva – Plataforma Educativa
            </h3>
            <p className="text-gray-600 mt-1">
              Sistema para gestión de cursos, evaluaciones y recursos digitales. Permite
              a los estudiantes acceder a contenidos, participar en foros y realizar pruebas en línea.
            </p>
          </div>
          <span className="mt-4 md:mt-0 px-4 py-2 bg-teal-600 text-white rounded-lg text-sm font-medium shadow-sm">
            Caso de Estudio
          </span>
        </div>

        {/* Resultados resumen */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center mt-6">
          <div className="bg-blue-50 p-4 rounded-xl shadow-sm">
            <p className="text-3xl font-bold text-blue-700">4.34</p>
            <p className="text-gray-600 text-sm">Calificación Final / 5.00</p>
          </div>
          <div className="bg-teal-50 p-4 rounded-xl shadow-sm">
            <p className="text-3xl font-bold text-teal-700">86.8%</p>
            <p className="text-gray-600 text-sm">Porcentaje de Calidad</p>
          </div>
          <div className="bg-green-50 p-4 rounded-xl shadow-sm">
            <p className="text-2xl font-bold text-green-700">Bueno</p>
            <p className="text-gray-600 text-sm">Clasificación General</p>
          </div>
        </div>
      </div>

      {/* Métricas detalladas */}
      <div className="bg-white shadow-md rounded-2xl p-6 mb-10">
        <h4 className="text-xl font-semibold text-gray-800 mb-4">Resultados por Métrica</h4>
        <div className="space-y-3 text-gray-700">
          <div className="flex justify-between border-b pb-2">
            <span>Funcionalidad — Cumple con todos los requisitos especificados</span>
            <span className="font-semibold text-blue-700">4.5 / 5.0</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Usabilidad — Interfaz intuitiva y fácil de navegar</span>
            <span className="font-semibold text-blue-700">4.7 / 5.0</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Eficiencia — Respuesta adecuada bajo carga moderada</span>
            <span className="font-semibold text-blue-700">4.2 / 5.0</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Mantenibilidad — Código modular y documentado</span>
            <span className="font-semibold text-blue-700">4.0 / 5.0</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Portabilidad — Compatible con múltiples dispositivos</span>
            <span className="font-semibold text-blue-700">4.3 / 5.0</span>
          </div>
        </div>
      </div>

      {/* Conclusión */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 shadow-sm">
        <h4 className="text-xl font-semibold text-gray-800 mb-3">
          Conclusiones del Ejemplo
        </h4>
        <p className="text-gray-700 mb-2">
          La plataforma <span className="font-semibold text-gray-800">Aula Interactiva</span> obtuvo
          una calificación total de <span className="font-semibold text-blue-700">4.34 / 5.00</span>,
          equivalente a un nivel de calidad <span className="font-semibold text-green-700">Bueno</span>.
        </p>
        <p className="text-gray-700 mb-2">
          Las principales fortalezas se encuentran en la <strong>usabilidad</strong> y
          <strong>funcionalidad</strong>, con puntuaciones superiores a 4.5. Las áreas de mejora
          incluyen la <strong>eficiencia</strong> y la <strong>mantenibilidad</strong>.
        </p>
        <p className="text-gray-700">
          Este ejemplo demuestra cómo el sistema de evaluación cuantitativa ayuda a identificar
          fortalezas y oportunidades de mejora, proporcionando una base sólida para la toma de
          decisiones en el desarrollo de software educativo.
        </p>
      </div>
    </section>
  );
}
