import { BookOpen, Award, BarChart3, FileText, Shield, CheckCircle, Lock, Zap, Users } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="text-center py-20 bg-gradient-to-br from-blue-50 via-teal-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-1.5 rounded-full mb-6">Estándares ISO de Calidad</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-teal-600 to-blue-600">
            Evalúa la Calidad de Software con Métricas Cuantitativas
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl mx-auto">
            Aprende a medir y mejorar la calidad de tus aplicaciones mediante un sistema 
            de evaluación basado en estándares internacionales ISO 9001, ISO 27001, ISO 27010 
            y buenas prácticas de desarrollo.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="/evaluacion"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Comenzar Evaluación
            </a>
            <a
              href="/conceptos"
              className="bg-white border border-gray-300 px-8 py-4 rounded-lg hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
            >
              Aprender Más
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 bg-white shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-blue-600">
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-blue-700">8</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Métricas de Evaluación</h3>
              <p className="text-gray-600 mt-2">Basadas en estándares ISO de calidad</p>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-teal-600">
              <div className="inline-flex items-center justify-center p-3 bg-teal-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-teal-700">0–5</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Escala de Calificación</h3>
              <p className="text-gray-600 mt-2">Resultados cuantitativos precisos</p>
            </div>
            <div className="p-8 bg-white shadow-lg rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-green-600">
              <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-green-700">100%</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800">Análisis Completo</h3>
              <p className="text-gray-600 mt-2">Con recomendaciones detalladas</p>
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
  
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explora Nuestras Secciones
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Navega por las diferentes áreas de nuestra plataforma para aprender y evaluar la calidad de software.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-4 bg-blue-100 rounded-lg mr-5">
                <BookOpen className="text-blue-600 w-7 h-7" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Conceptos Fundamentales
                </h3>
                <p className="text-gray-600 mt-2">
                  Aprende qué es la calidad de software y los estándares internacionales ISO 9001, ISO 27001 e ISO 27010.
                </p>
                <a href="/conceptos" className="inline-block mt-4 text-blue-600 font-medium hover:text-blue-800">
                  Ver conceptos →
                </a>
              </div>
            </div>

            <div className="flex items-start p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-4 bg-green-100 rounded-lg mr-5">
                <Award className="text-green-600 w-7 h-7" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Beneficios y Buenas Prácticas
                </h3>
                <p className="text-gray-600 mt-2">
                  Descubre los beneficios de implementar normas ISO y las mejores prácticas para el desarrollo de software.
                </p>
                <a href="/beneficios" className="inline-block mt-4 text-green-600 font-medium hover:text-green-800">
                  Ver beneficios →
                </a>
              </div>
            </div>

            <div className="flex items-start p-8 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="p-4 bg-purple-100 rounded-lg mr-5">
                <BarChart3 className="text-purple-600 w-7 h-7" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Herramienta de Evaluación
                </h3>
                <p className="text-gray-600 mt-2">
                  Evalúa aplicativos con métricas cuantitativas y obtén resultados de 0 a 5.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="p-3 bg-orange-100 rounded-lg mr-4">
                <FileText className="text-orange-600 w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900">
                  Ejemplo Práctico
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Revisa un caso de estudio completo de evaluación de un aplicativo educativo.
                </p>
              </div>
            </div>
          </div>

          <a
            href="/evaluacion"
            className="inline-flex items-center mt-12 bg-blue-700 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-800 transition"
          >
            <BarChart3 className="w-5 h-5 mr-2" /> Comenzar Evaluación
          </a>
        </div>
      </section>
    </>
  );
}
