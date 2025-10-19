import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (path) =>
    pathname === path
      ? "text-blue-700 font-semibold"
      : "hover:text-blue-600 transition";

  return (
    <nav className="bg-white shadow-sm py-3 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
  
        <Link to="/" className="font-semibold text-lg text-blue-700">
          Calidad Software
        </Link>

        {/* menú hamburguesa */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-700 focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Menú principal pantallas medianas) */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className={linkClass("/")}>
            Inicio
          </Link>
          <Link to="/conceptos" className={linkClass("/conceptos")}>
            Conceptos
          </Link>
          <Link to="/beneficios" className={linkClass("/beneficios")}>
            Beneficios
          </Link>
          <Link to="/evaluacion" className={linkClass("/evaluacion")}>
            Evaluación
          </Link>
          <Link to="/ejemplo" className={linkClass("/ejemplo")}>
            Ejemplo
          </Link>
          <Link
            to="/evaluacion"
            className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
          >
            Evaluar Ahora
          </Link>
        </div>
      </div>

      {/* Menú desplegable móvil */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md border-t mt-2">
          <div className="flex flex-col items-center gap-4 py-4">
            <Link
              to="/"
              className={linkClass("/")}
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/conceptos"
              className={linkClass("/conceptos")}
              onClick={() => setIsOpen(false)}
            >
              Conceptos
            </Link>
            <Link
              to="/beneficios"
              className={linkClass("/beneficios")}
              onClick={() => setIsOpen(false)}
            >
              Beneficios
            </Link>
            <Link
              to="/evaluacion"
              className={linkClass("/evaluacion")}
              onClick={() => setIsOpen(false)}
            >
              Evaluación
            </Link>
            <Link
              to="/ejemplo"
              className={linkClass("/ejemplo")}
              onClick={() => setIsOpen(false)}
            >
              Ejemplo
            </Link>
            <Link
              to="/evaluacion"
              onClick={() => setIsOpen(false)}
              className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition"
            >
              Evaluar Ahora
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
