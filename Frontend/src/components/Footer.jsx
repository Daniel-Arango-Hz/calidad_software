export default function Footer() {
  return (
    <footer className="bg-gray-50 py-10 mt-12 border-t">
      <div className="container mx-auto px-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">

          <div>
            <h3 className="font-semibold text-blue-700 text-lg mb-2">
              Calidad Software
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Plataforma educativa para evaluar y mejorar la calidad de software
              mediante métricas cuantitativas basadas en estándares internacionales.
            </p>
          </div>

     
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Enlaces Rápidos</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                <a href="/" className="hover:text-blue-600 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/conceptos" className="hover:text-blue-600 transition-colors">
                  Conceptos
                </a>
              </li>
              <li>
                <a href="/beneficios" className="hover:text-blue-600 transition-colors">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="/evaluacion" className="hover:text-blue-600 transition-colors">
                  Evaluación
                </a>
              </li>
            </ul>
          </div>

       
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Recursos</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>
                <a
                  href="https://iso25000.com/index.php/en/iso-25000-standards/iso-25010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  ISO/IEC 25010
                </a>
              </li>
              <li>
                <a
                  href="https://www.w3.org/TR/WCAG21/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors"
                >
                  WCAG 2.1
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-200 mt-8 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Calidad Software. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
