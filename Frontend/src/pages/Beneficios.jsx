export default function Beneficios() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Beneficios y Buenas Prácticas
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Descubre las ventajas de implementar calidad de software y las mejores prácticas para lograrlo.
        </p>

        <h2 className="text-3xl font-semibold text-center mb-4">Beneficios de la Calidad de Software</h2>
        <p className="text-center text-gray-600 mb-10">
          Invertir en calidad de software genera retornos significativos en múltiples dimensiones del desarrollo y operación de aplicaciones educativas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            [ "Mayor Satisfacción del Usuario", "Mejora la experiencia y adopción del usuario en entornos educativos."],
            [ "Reducción de Errores", "Menos bugs y fallos críticos que interrumpan el proceso de aprendizaje."],
            ["Ahorro de Tiempo", "Menos tiempo dedicado a correcciones y más para nuevas funcionalidades."],
            [ "Reducción de Costos", "Detectar problemas temprano es mucho más económico que corregir en producción."],
            [ "Mejor Colaboración", "Código limpio y bien documentado facilita el trabajo en equipo."],
            [ "Escalabilidad", "Software bien diseñado puede crecer y adaptarse a nuevas necesidades educativas."]
          ].map(([icon, title, text]) => (
            <div key={title} className="p-6 bg-white shadow rounded-xl">
              <h3 className="font-semibold text-lg mb-2">{icon} {title}</h3>
              <p className="text-gray-600">{text}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-semibold text-center mb-6">Buenas Prácticas de Desarrollo</h2>
        <p className="text-center text-gray-600 mb-10">
          Implementar estas prácticas garantiza un desarrollo sostenible y software de alta calidad.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            ["Desarrollo", [
              "Escribir código limpio y legible siguiendo estándares.",
              "Implementar principios SOLID.",
              "Usar patrones de diseño apropiados.",
              "Documentar el código de manera clara."
            ]],
            ["Control de Versiones", [
              "Usar Git con commits descriptivos.",
              "Aplicar estrategias de branching (Git Flow).",
              "Realizar code reviews.",
              "Mantener un historial limpio."
            ]],
            ["Pruebas", [
              "Escribir pruebas unitarias para funciones críticas.",
              "Implementar pruebas de integración.",
              "Realizar pruebas de usabilidad.",
              "Automatizar pruebas continuas."
            ]],
            [" Seguridad", [
              "Validar entradas de usuario.",
              "Implementar autenticación robusta.",
              "Proteger datos sensibles.",
              "Actualizar dependencias."
            ]],
            [" Documentación", [
              "Crear documentación técnica actualizada.",
              "Escribir guías de usuario claras.",
              "Documentar APIs con detalles.",
              "Mantener un README informativo."
            ]],
            [" Arquitectura", [
              "Diseñar sistemas modulares.",
              "Separar responsabilidades.",
              "Planear escalabilidad.",
              "Manejar errores consistentemente."
            ]]
          ].map(([title, points]) => (
            <div key={title} className="p-6 bg-white shadow rounded-xl">
              <h3 className="font-semibold text-lg mb-3">{title}</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-10">
          <a href="/conceptos" className="px-6 py-3 bg-gray-200 rounded-lg hover:bg-gray-300">← Conceptos</a>
          <a href="/evaluacion" className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800">Evaluar Aplicativo →</a>
        </div>
      </div>
    </section>
  );
}
