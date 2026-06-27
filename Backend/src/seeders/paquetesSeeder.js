import { Paquete } from "../models/index.js";
import dataPaquete from "../data/dataPaquete.js";

async function cargarPaquetes() {
  try {
    const cantidadPaquetes = await Paquete.count();

    if (cantidadPaquetes === 0) {
      await Paquete.bulkCreate(dataPaquete);
      console.log("Paquetes de prueba creados");
    } else {
      console.log("Ya existen Paquetes, no se hará inserción");
    }
  } catch (error) {
    console.log("Error cargando Paquetes:", error);
  }
}

export default cargarPaquetes;
