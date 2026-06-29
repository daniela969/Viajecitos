import { Routes, Route } from "react-router-dom";

import Inicio from "../pages/Inicio";
import Contacto from "../pages/Contacto";
import Servicios from "../pages/Servicios";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />

      <Route path="/contacto" element={<Contacto />} />
      <Route path="/servicios" element={<Servicios />} />
    </Routes>
  );
}

export default AppRoutes;
