import cargarBlog from "./blogSeeder.js";
import cargarDestinos from "./destinosSeeder.js";
import cargarPaquetes from "./paquetesSeeder.js";
import { cargarServicios } from "./servicioSeeder.js";
import cargarTestimonios from "./testimonioSeeder.js";
import cargarUsuarios from "./usuariosSeeder.js";

async function cargarDatos() {
  console.log("Seeder principal cargado");
  await cargarDestinos();
  await cargarUsuarios();
  await cargarPaquetes();
  await cargarServicios();
  await cargarTestimonios();
  await cargarBlog()
}

export default cargarDatos;
