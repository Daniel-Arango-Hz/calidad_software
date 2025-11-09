import { Shield, CheckCircle, Target, RefreshCcw, BarChart3 } from "lucide-react";

export default function Conceptos() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full">Fundamentos de Calidad</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600">
            Conceptos Fundamentales de Calidad
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprende los conceptos esenciales que fundamentan la calidad y su aplicación en los procesos organizacionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="p-8 bg-white shadow-lg rounded-xl border-t-4 border-blue-600 hover:shadow-xl transition-all duration-300">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
              <Target className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Definición de Calidad</h3>
            <p className="text-gray-600">
              Grado en que un producto o servicio cumple con los requisitos establecidos y las expectativas del usuario, garantizando la satisfacción y el valor agregado.
            </p>
          </div>
          
          <div className="p-8 bg-white shadow-lg rounded-xl border-t-4 border-teal-600 hover:shadow-xl transition-all duration-300">
            <div className="inline-flex items-center justify-center p-3 bg-teal-100 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Control de Calidad</h3>
            <p className="text-gray-600">
              Proceso de verificación y monitoreo para asegurar que los procesos y resultados cumplan con los estándares establecidos.
            </p>
          </div>
          
          <div className="p-8 bg-white shadow-lg rounded-xl border-t-4 border-purple-600 hover:shadow-xl transition-all duration-300">
            <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-4">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Aseguramiento de Calidad</h3>
            <p className="text-gray-600">
              Conjunto de acciones planificadas y sistemáticas para garantizar que los resultados sean correctos desde el inicio del proceso.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-white shadow-lg rounded-xl border-t-4 border-amber-600">
            <div className="inline-flex items-center justify-center p-3 bg-amber-100 rounded-full mb-4">
              <RefreshCcw className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Mejora Continua</h3>
            <p className="text-gray-600">
              Principio fundamental que busca el perfeccionamiento constante de los procesos mediante la retroalimentación y el análisis de datos.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <span className="text-amber-600 mr-2">•</span>
                Evaluación constante
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-amber-600 mr-2">•</span>
                Retroalimentación
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-amber-600 mr-2">•</span>
                Optimización de procesos
              </li>
            </ul>
          </div>

          <div className="p-8 bg-white shadow-lg rounded-xl border-t-4 border-green-600">
            <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
              <BarChart3 className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Indicadores de Calidad</h3>
            <p className="text-gray-600">
              Métricas y valores que permiten medir objetivamente el desempeño y la eficacia de los procesos de calidad.
            </p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-600">
                <span className="text-green-600 mr-2">•</span>
                Medición objetiva
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-green-600 mr-2">•</span>
                Análisis de resultados
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-green-600 mr-2">•</span>
                Toma de decisiones basada en datos
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <a href="/" className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300 flex items-center">
            <span className="mr-2">←</span> Volver al Inicio
          </a>
          <a href="/beneficios" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors duration-300 flex items-center">
            Beneficios de la Calidad <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
