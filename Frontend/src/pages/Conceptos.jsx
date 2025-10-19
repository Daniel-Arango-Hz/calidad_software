export default function Conceptos() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Conceptos Fundamentales de Calidad de Software
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Comprende los fundamentos, estándares y características que definen la calidad en el desarrollo de software.
        </p>

        <h2 className="text-3xl font-semibold text-center mb-4">Entendiendo la Calidad de Software</h2>
        <p className="text-center text-gray-600 mb-10">
          La calidad de software no es un concepto abstracto, sino un conjunto medible de características que determinan el éxito de una aplicación en contextos educativos y profesionales.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-semibold text-lg mb-2"> ¿Qué es la Calidad de Software?</h3>
            <p className="text-gray-600">
              Es el grado en que un sistema, componente o proceso cumple con los requisitos especificados y las necesidades o expectativas del cliente o usuario.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-semibold text-lg mb-2"> Estándares Internacionales</h3>
            <p className="text-gray-600">
              Basado en ISO/IEC 25010, que define un modelo de calidad con características como funcionalidad, confiabilidad, usabilidad, eficiencia, mantenibilidad y portabilidad.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-semibold text-lg mb-2"> Contexto Educativo</h3>
            <p className="text-gray-600">
              En entornos educativos, la calidad del software es crucial para garantizar experiencias de aprendizaje efectivas, accesibles y alineadas con objetivos pedagógicos.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-xl">
            <h3 className="font-semibold text-lg mb-2"> Ambientes Reales</h3>
            <p className="text-gray-600">
              La evaluación de calidad en ambientes reales considera factores como rendimiento, seguridad, escalabilidad y experiencia del usuario final.
            </p>
          </div>
        </div>

        <div className="p-8 bg-blue-50 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-6 text-center">Características Clave de Calidad</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <ul className="space-y-2">
              <li><strong>• Funcionalidad:</strong> Proporciona funciones que satisfacen necesidades establecidas.</li>
              <li><strong>• Usabilidad:</strong> Facilidad para aprender y utilizar el sistema.</li>
              <li><strong>• Mantenibilidad:</strong> Facilidad para modificar o mejorar el software.</li>
            </ul>
            <ul className="space-y-2">
              <li><strong>• Confiabilidad:</strong> Mantiene un rendimiento estable bajo diversas condiciones.</li>
              <li><strong>• Eficiencia:</strong> Utiliza los recursos de manera óptima.</li>
              <li><strong>• Portabilidad:</strong> Puede transferirse fácilmente a otros entornos.</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between mt-10">
          <a href="/" className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300">← Volver al Inicio</a>
          <a href="/beneficios" className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800">Beneficios y Prácticas →</a>
        </div>
      </div>
    </section>
  );
}
