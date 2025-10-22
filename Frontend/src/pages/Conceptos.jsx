import { Shield, CheckCircle, FileCheck, Lock } from "lucide-react";

export default function Conceptos() {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full">Estándares Internacionales</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-teal-600">
            Conceptos Fundamentales de Calidad de Software
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprende los fundamentos, estándares y características que definen la calidad en el desarrollo de software según las normas ISO más relevantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-8 bg-white shadow-lg rounded-xl border-t-4 border-blue-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">ISO 9001</h3>
            <p className="text-gray-600 mb-4">
              Establece los criterios para un sistema de gestión de calidad basado en principios como el enfoque al cliente, liderazgo y mejora continua.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Enfoque basado en procesos</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Toma de decisiones basada en evidencia</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Mejora continua del software</span>
              </li>
            </ul>
          </div>
          
          <div className="p-8 bg-white shadow-lg rounded-xl border-t-4 border-teal-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="inline-flex items-center justify-center p-3 bg-teal-100 rounded-full mb-4">
              <Lock className="h-8 w-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">ISO 27001</h3>
            <p className="text-gray-600 mb-4">
              Define los requisitos para establecer, implementar, mantener y mejorar continuamente un sistema de gestión de seguridad de la información.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Evaluación y tratamiento de riesgos</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Controles de seguridad</span>
              </li>
              <li className="flex items-start">
                <span className="text-teal-600 mr-2">•</span>
                <span>Protección de datos sensibles</span>
              </li>
            </ul>
          </div>
          
          <div className="p-8 bg-white shadow-lg rounded-xl border-t-4 border-purple-600 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-4">
              <Shield className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">ISO 27010</h3>
            <p className="text-gray-600 mb-4">
              Proporciona directrices para la gestión de la seguridad de la información en comunicaciones intersectoriales e interorganizacionales.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Intercambio seguro de información</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Gestión de incidentes de seguridad</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">•</span>
                <span>Comunicación entre organizaciones</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-8 bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl shadow-sm mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Aplicación en el Desarrollo de Software</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <FileCheck className="h-6 w-6 text-blue-600 mr-3" />
                <h4 className="text-lg font-semibold">Ciclo de Vida del Software</h4>
              </div>
              <p className="text-gray-600">
                Las normas ISO proporcionan un marco para gestionar la calidad en todas las etapas del ciclo de vida del software, desde la planificación hasta el mantenimiento.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-teal-600 mr-3" />
                <h4 className="text-lg font-semibold">Seguridad y Protección</h4>
              </div>
              <p className="text-gray-600">
                La implementación de ISO 27001 y 27010 garantiza que el software proteja adecuadamente la información sensible y cumpla con los requisitos de seguridad.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">Beneficios de Implementar Normas ISO</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Mayor Confianza</h4>
              <p className="text-sm text-gray-600">Aumenta la confianza de los usuarios y clientes en el software</p>
            </div>
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-teal-100 text-teal-600 mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Reducción de Riesgos</h4>
              <p className="text-sm text-gray-600">Minimiza vulnerabilidades y problemas de seguridad</p>
            </div>
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600 mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Mejora Continua</h4>
              <p className="text-sm text-gray-600">Establece procesos para la mejora constante del software</p>
            </div>
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600 mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">Competitividad</h4>
              <p className="text-sm text-gray-600">Diferenciación en el mercado por calidad certificada</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <a href="/" className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300 flex items-center">
            <span className="mr-2">←</span> Volver al Inicio
          </a>
          <a href="/beneficios" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors duration-300 flex items-center">
            Beneficios y Prácticas <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
