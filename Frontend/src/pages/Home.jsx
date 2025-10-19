import { BookOpen, Award, BarChart3, FileText } from "lucide-react";

export default function Home() {
  return (
    <>
   
      <section className="text-center py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Evalúa la Calidad de Software con{" "}
            <span className="text-teal-600">Métricas Cuantitativas</span>
          </h1>
          <p className="text-gray-600 mb-6">
            Aprende a medir y mejorar la calidad de tus aplicaciones educativas
            mediante un sistema de evaluación basado en estándares internacionales
            (ISO/IEC 25010) y buenas prácticas de desarrollo.
          </p>
          <div className="flex justify-center gap-4 mb-10">
            <a
              href="/evaluacion"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
            >
              Comenzar Evaluación
            </a>
            <a
              href="/conceptos"
              className="bg-white border px-6 py-3 rounded-lg hover:bg-gray-50"
            >
              Aprender Más
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white shadow rounded-xl">
              <h3 className="text-2xl font-semibold text-blue-700">8</h3>
              <p>Métricas de Evaluación</p>
              <p className="text-sm text-gray-500">Basadas en ISO/IEC 25010</p>
            </div>
            <div className="p-6 bg-white shadow rounded-xl">
              <h3 className="text-2xl font-semibold text-teal-600">0–5</h3>
              <p>Escala de Calificación</p>
              <p className="text-sm text-gray-500">Resultados cuantitativos precisos</p>
            </div>
            <div className="p-6 bg-white shadow rounded-xl">
              <h3 className="text-2xl font-semibold text-green-600">100%</h3>
              <p>Análisis Completo</p>
              <p className="text-sm text-gray-500">Con recomendaciones detalladas</p>
            </div>
          </div>
        </div>
      </section>

  
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explora Nuestras Secciones
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Navega por las diferentes áreas de nuestra plataforma para aprender y evaluar la calidad de software.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="p-3 bg-blue-100 rounded-lg mr-4">
                <BookOpen className="text-blue-600 w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900">
                  Conceptos Fundamentales
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Aprende qué es la calidad de software y los estándares internacionales ISO/IEC 25010.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="p-3 bg-green-100 rounded-lg mr-4">
                <Award className="text-green-600 w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900">
                  Beneficios y Buenas Prácticas
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  Descubre los beneficios de la calidad y las mejores prácticas de desarrollo.
                </p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition">
              <div className="p-3 bg-purple-100 rounded-lg mr-4">
                <BarChart3 className="text-purple-600 w-6 h-6" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900">
                  Herramienta de Evaluación
                </h3>
                <p className="text-gray-600 text-sm mt-1">
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
