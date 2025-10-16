import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    pathname === path
      ? "text-blue-700 font-semibold"
      : "hover:text-blue-600 transition";

  return (
    <nav className="bg-white shadow-sm py-3">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="font-semibold text-lg text-blue-700">
          Calidad Software
        </Link>
        <div className="flex gap-4">
          <Link to="/" className={linkClass("/")}>Inicio</Link>
          <Link to="/conceptos" className={linkClass("/conceptos")}>Conceptos</Link>
          <Link to="/beneficios" className={linkClass("/beneficios")}>Beneficios</Link>
          <Link to="/evaluacion" className={linkClass("/evaluacion")}>Evaluación</Link>
          <Link to="/ejemplo" className={linkClass("/ejemplo")}>Ejemplo</Link>
        </div>
        <Link
          to="/evaluacion"
          className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
        >
          Evaluar Ahora
        </Link>
      </div>
    </nav>
  );
}
