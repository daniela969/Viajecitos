import cargarDestinos from "./destinosSeeder.js";
import cargarPaquetes from "./paquetesSeeder.js";
import cargarUsuarios from "./usuariosSeeder.js";

async function cargarDatos() {
  console.log("Seeder principal cargado");
  await cargarDestinos();
  await cargarUsuarios();
  await cargarPaquetes();
}

export default cargarDatos;
