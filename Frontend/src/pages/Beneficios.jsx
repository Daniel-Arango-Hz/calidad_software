import { CheckCircle, TrendingUp, Users, Target, RefreshCcw } from "lucide-react";

export default function Beneficios() {
  return (
    <section className="py-16 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-teal-100 text-teal-800 text-sm font-medium px-4 py-1.5 rounded-full">
            Ventajas y Resultados
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">
            Beneficios de Implementar Calidad
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            La calidad es una filosofía de trabajo que genera cambios positivos y mejoras continuas en toda la organización.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-white shadow-lg rounded-xl border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <Target className="h-8 w-8 text-blue-600 mr-4" />
              <h3 className="text-xl font-bold text-gray-800">Optimización de Procesos</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Las tareas se vuelven más claras, ordenadas y medibles, reduciendo errores y retrabajos.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                <span className="text-gray-700">Mayor eficiencia operativa</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                <span className="text-gray-700">Reducción de costos operativos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                <span className="text-gray-700">Procesos más organizados</span>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-white shadow-lg rounded-xl border-l-4 border-teal-500">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-teal-600 mr-4" />
              <h3 className="text-xl font-bold text-gray-800">Satisfacción del Usuario</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Los servicios y productos cumplen o superan las expectativas de los usuarios.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5" />
                <span className="text-gray-700">Mayor retención de usuarios</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5" />
                <span className="text-gray-700">Retroalimentación positiva</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5" />
                <span className="text-gray-700">Mejor experiencia de usuario</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 bg-white shadow-lg rounded-xl border-l-4 border-purple-500">
            <div className="flex items-center mb-4">
              <TrendingUp className="h-8 w-8 text-purple-600 mr-4" />
              <h3 className="text-xl font-bold text-gray-800">Reputación Institucional</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Una entidad que demuestra calidad genera confianza en usuarios, aliados y auditores.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                <span className="text-gray-700">Mayor credibilidad en el mercado</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                <span className="text-gray-700">Ventaja competitiva</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                <span className="text-gray-700">Reconocimiento del sector</span>
              </li>
            </ul>
          </div>

          <div className="p-8 bg-white shadow-lg rounded-xl border-l-4 border-amber-500">
            <div className="flex items-center mb-4">
              <RefreshCcw className="h-8 w-8 text-amber-600 mr-4" />
              <h3 className="text-xl font-bold text-gray-800">Mejora Continua</h3>
            </div>
            <p className="text-gray-600 mb-4">
              La organización mantiene un ciclo constante de innovación y crecimiento.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                <span className="text-gray-700">Innovación constante</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                <span className="text-gray-700">Adaptación al cambio</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-amber-600 mr-2 mt-0.5" />
                <span className="text-gray-700">Evolución organizacional</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-2xl shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Ejemplo Práctico</h2>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-bold text-lg mb-4 text-gray-800">Institución Educativa con Sistema de Gestión de Calidad</h3>
            <p className="text-gray-600 mb-4">
              Una institución educativa que implementa un sistema de gestión de calidad puede:
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Analizar resultados de estudiantes sistemáticamente</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Identificar debilidades en los programas académicos</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Diseñar estrategias de mejora basadas en datos</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Lograr mayor satisfacción de estudiantes y docentes</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <a href="/conceptos" className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300 flex items-center">
            <span className="mr-2">←</span> Conceptos
          </a>
          <a href="/software" className="px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg hover:from-teal-700 hover:to-teal-800 transition-colors duration-300 flex items-center">
            Software y Calidad <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
