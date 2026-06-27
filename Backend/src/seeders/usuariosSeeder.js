import { Usuario } from "../models/index.js";
import dataUsuarios from "../data/dataUsuarios.js";

async function cargarUsuarios()  {
  try {
    const cantidadUsuarios = await Usuario.count();

    if (cantidadUsuarios === 0) {
      await Usuario.bulkCreate(dataUsuarios);
      console.log("Usuarios de prueba creados");
    } else {
      console.log("Ya existen usuarios, no se hará inserción");
    }
  } catch (error) {
    console.log("Error cargando usuarios:", error);
  }
};

export default cargarUsuarios;
