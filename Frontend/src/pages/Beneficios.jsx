import { CheckCircle, Shield, Award, Zap, Users, TrendingUp, Code, GitBranch, TestTube, Lock, FileText, Layout } from "lucide-react";

export default function Beneficios() {
  return (
    <section className="py-16 bg-gradient-to-b from-teal-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-teal-100 text-teal-800 text-sm font-medium px-4 py-1.5 rounded-full">Mejores Prácticas</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-blue-600">
            Beneficios y Buenas Prácticas
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Descubre las ventajas de implementar calidad de software según las normas ISO y las mejores prácticas para lograrlo.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Beneficios de Implementar Normas ISO en el Desarrollo de Software</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-200 rounded-full mr-4">
                  <CheckCircle className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="font-bold text-lg text-blue-800">ISO 9001</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">Mejora la satisfacción del cliente</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">Procesos más eficientes y controlados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">Reducción de errores y costos operativos</span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl border border-teal-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-teal-200 rounded-full mr-4">
                  <Lock className="h-6 w-6 text-teal-700" />
                </div>
                <h3 className="font-bold text-lg text-teal-800">ISO 27001</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">Mayor protección de datos sensibles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">Reducción de riesgos de seguridad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">Cumplimiento con regulaciones legales</span>
                </li>
              </ul>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-purple-200 rounded-full mr-4">
                  <Shield className="h-6 w-6 text-purple-700" />
                </div>
                <h3 className="font-bold text-lg text-purple-800">ISO 27010</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">Comunicación segura entre organizaciones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">Mejor gestión de incidentes de seguridad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2 mt-1">•</span>
                  <span className="text-gray-700">Intercambio de información protegido</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Beneficios Generales de la Calidad de Software</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="font-semibold text-lg">Mayor Satisfacción del Usuario</h3>
              </div>
              <p className="text-gray-600">
                Mejora la experiencia y adopción del usuario en entornos educativos y profesionales.
              </p>
            </div>
            
            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-all duration-300 border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <Shield className="h-6 w-6 text-red-600 mr-3" />
                <h3 className="font-semibold text-lg">Reducción de Errores</h3>
              </div>
              <p className="text-gray-600">
                Menos bugs y fallos críticos que interrumpan procesos importantes del negocio.
              </p>
            </div>
            
            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-all duration-300 border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <Zap className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="font-semibold text-lg">Ahorro de Tiempo</h3>
              </div>
              <p className="text-gray-600">
                Menos tiempo dedicado a correcciones y más para desarrollar nuevas funcionalidades.
              </p>
            </div>
            
            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-all duration-300 border-l-4 border-yellow-500">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-yellow-600 mr-3" />
                <h3 className="font-semibold text-lg">Reducción de Costos</h3>
              </div>
              <p className="text-gray-600">
                Detectar problemas temprano es mucho más económico que corregir en producción.
              </p>
            </div>
            
            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-all duration-300 border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="font-semibold text-lg">Mejor Colaboración</h3>
              </div>
              <p className="text-gray-600">
                Código limpio y bien documentado facilita el trabajo en equipo y la incorporación de nuevos desarrolladores.
              </p>
            </div>
            
            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-all duration-300 border-l-4 border-teal-500">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-6 w-6 text-teal-600 mr-3" />
                <h3 className="font-semibold text-lg">Escalabilidad</h3>
              </div>
              <p className="text-gray-600">
                Software bien diseñado puede crecer y adaptarse a nuevas necesidades del negocio sin grandes refactorizaciones.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-8 rounded-2xl shadow-sm mb-16">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Buenas Prácticas de Desarrollo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <Code className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="font-semibold text-lg">Desarrollo</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Escribir código limpio y legible siguiendo estándares</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Implementar principios SOLID</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Usar patrones de diseño apropiados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Documentar el código de manera clara</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <GitBranch className="h-6 w-6 text-green-600 mr-3" />
                <h3 className="font-semibold text-lg">Control de Versiones</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Usar Git con commits descriptivos</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Aplicar estrategias de branching (Git Flow)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Realizar code reviews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Mantener un historial limpio</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <TestTube className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="font-semibold text-lg">Pruebas</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Escribir pruebas unitarias para funciones críticas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Implementar pruebas de integración</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Realizar pruebas de usabilidad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  <span>Automatizar pruebas continuas</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <Lock className="h-6 w-6 text-red-600 mr-3" />
                <h3 className="font-semibold text-lg">Seguridad</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Validar entradas de usuario</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Implementar autenticación robusta</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Proteger datos sensibles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Actualizar dependencias regularmente</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-yellow-600 mr-3" />
                <h3 className="font-semibold text-lg">Documentación</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Crear documentación técnica actualizada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Escribir guías de usuario claras</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Documentar APIs con detalles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Mantener un README informativo</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center mb-4">
                <Layout className="h-6 w-6 text-teal-600 mr-3" />
                <h3 className="font-semibold text-lg">Arquitectura</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Diseñar sistemas modulares</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Separar responsabilidades</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Planear escalabilidad</span>
                </li>
                <li className="flex items-start">
                  <span className="text-teal-500 mr-2">•</span>
                  <span>Manejar errores consistentemente</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <a href="/conceptos" className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300 flex items-center">
            <span className="mr-2">←</span> Conceptos
          </a>
          <a href="/evaluacion" className="px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-lg hover:from-teal-700 hover:to-teal-800 transition-colors duration-300 flex items-center">
            Evaluar Aplicativo <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
