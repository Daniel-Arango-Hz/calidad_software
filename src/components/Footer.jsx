export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8 mt-12 border-t">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <div>
          <h3 className="font-semibold text-blue-700">Calidad Software</h3>
          <p className="text-sm text-gray-600">
            Plataforma educativa para evaluar y mejorar la calidad de software
            mediante métricas cuantitativas basadas en estándares internacionales.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Enlaces Rápidos</h4>
          <ul className="text-sm text-gray-600">
            <li><a href="/">Inicio</a></li>
            <li><a href="/conceptos">Conceptos</a></li>
            <li><a href="/beneficios">Beneficios</a></li>
            <li><a href="/evaluacion">Evaluación</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Recursos</h4>
          <ul className="text-sm text-gray-600">
            <li>ISO/IEC 25010</li>
            <li>WCAG 2.1</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
