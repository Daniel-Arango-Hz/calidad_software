import { BookOpen, Award, BarChart3, FileText, Shield, CheckCircle, Lock, RefreshCcw, Users, Target } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="text-center py-20 bg-gradient-to-br from-blue-50 via-teal-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Calidad en el Software
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-teal-600 to-blue-600">
            Mejora Continua y Excelencia en el Desarrollo
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
            Descubre cómo la calidad puede transformar tus procesos, mejorar la satisfacción de usuarios
            y optimizar el desarrollo de software mediante estándares internacionales.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="/conceptos"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Explorar Conceptos
            </a>
            <a
              href="/beneficios"
              className="bg-white border border-gray-300 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
            >
              Ver Beneficios
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-8 bg-white shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-blue-600">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
                <Target className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Optimización</h3>
              <p className="text-gray-600 mt-2">Procesos más claros y eficientes</p>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-teal-600">
              <div className="inline-flex items-center justify-center p-3 bg-teal-100 rounded-full mb-4">
                <Users className="h-6 w-6 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Satisfacción</h3>
              <p className="text-gray-600 mt-2">Usuarios más contentos</p>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-purple-600">
              <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-full mb-4">
                <Shield className="h-6 w-6 text-purple-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Confianza</h3>
              <p className="text-gray-600 mt-2">Mayor reputación institucional</p>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-green-600">
              <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
                <RefreshCcw className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">Mejora</h3>
              <p className="text-gray-600 mt-2">Evolución constante</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Normas ISO para Calidad de Software
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Conoce los estándares internacionales que definen las mejores prácticas para el desarrollo de software de calidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-200 rounded-full mr-4">
                  <CheckCircle className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-blue-800">ISO 9001</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Establece los criterios para un sistema de gestión de calidad basado en principios como el enfoque al cliente y la mejora continua.
              </p>
              <a href="/conceptos" className="text-blue-700 font-medium hover:underline flex items-center">
                Aprender más <span className="ml-1">→</span>
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-teal-200 rounded-full mr-4">
                  <Lock className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-bold text-teal-800">ISO 27001</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Define los requisitos para establecer y mantener un sistema de gestión de seguridad de la información.
              </p>
              <a href="/conceptos" className="text-teal-700 font-medium hover:underline flex items-center">
                Aprender más <span className="ml-1">→</span>
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-200 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="text-xl font-bold text-purple-800">ISO 27010</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Proporciona directrices para la gestión de la seguridad de la información en comunicaciones intersectoriales.
              </p>
              <a href="/conceptos" className="text-purple-700 font-medium hover:underline flex items-center">
                Aprender más <span className="ml-1">→</span>
              </a>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-amber-200 rounded-full mr-4">
                  <BarChart3 className="h-6 w-6 text-amber-700" />
                </div>
                <h3 className="text-xl font-bold text-amber-800">ISO 25000</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Proporciona un marco para la evaluación de la calidad del producto software y establece criterios para su especificación y medición.
              </p>
              <a href="/conceptos" className="text-amber-700 font-medium hover:underline flex items-center">
                Aprender más <span className="ml-1">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
  
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explora Nuestro Contenido
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Descubre cómo la calidad puede transformar tu organización y mejorar tus procesos de desarrollo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="p-4 bg-blue-100 rounded-lg self-start mb-4">
                <BookOpen className="text-blue-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fundamentos de Calidad
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Comprende los conceptos esenciales que fundamentan la calidad y su importancia en el desarrollo de software.
              </p>
              <a href="/conceptos" className="text-blue-600 font-medium hover:text-blue-800 inline-flex items-center">
                Explorar conceptos <span className="ml-2">→</span>
              </a>
            </div>

            <div className="flex flex-col p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="p-4 bg-teal-100 rounded-lg self-start mb-4">
                <Award className="text-teal-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Beneficios y Resultados
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Descubre cómo la calidad optimiza procesos, mejora la satisfacción y fortalece la reputación institucional.
              </p>
              <a href="/beneficios" className="text-teal-600 font-medium hover:text-teal-800 inline-flex items-center">
                Ver beneficios <span className="ml-2">→</span>
              </a>
            </div>

            <div className="flex flex-col p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
              <div className="p-4 bg-purple-100 rounded-lg self-start mb-4">
                <FileText className="text-purple-600 w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Caso de Estudio
              </h3>
              <p className="text-gray-600 mb-4 flex-grow">
                Analiza un ejemplo práctico de implementación de calidad en una institución educativa.
              </p>
              <a href="/ejemplo" className="text-purple-600 font-medium hover:text-purple-800 inline-flex items-center">
                Ver ejemplo <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
