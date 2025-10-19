import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Conceptos from "./pages/Conceptos";
import Beneficios from "./pages/Beneficios";
import Evaluacion from "./pages/Evaluacion";
import Ejemplo from "./pages/Ejemplo";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/conceptos" element={<Conceptos />} />
            <Route path="/beneficios" element={<Beneficios />} />
            <Route path="/evaluacion" element={<Evaluacion />} />
            <Route path="/ejemplo" element={<Ejemplo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
