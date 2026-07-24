import { Routes, Route } from "react-router-dom";

import Inicio from "../pages/Inicio";
import Destinos from "../pages/Destinos";
import Paquetes from "../pages/Paquetes";
import Servicios from "../pages/Servicios";
import Contacto from "../pages/Contacto";
import Blog from "../pages/Blog";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/destinos" element={<Destinos />} />
      <Route path="/paquetes" element={<Paquetes />} />
      <Route path="/servicios" element={<Servicios />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/blog" element={<Blog />} /> 
      <Route path="*" element={<h1>404 -Pagina no encontrada</h1>} />
    </Routes> 
  );
}

export default AppRoutes;
