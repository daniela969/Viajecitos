import { Servicio } from "../models/index.js";
import dataServicios from "../data/dataServicio.js";

export async function cargarServicios() {
  try {
    const cantidadServicios = await Servicio.count();

    if (cantidadServicios === 0) {
      await Servicio.bulkCreate(dataServicios);
      console.log("Servicios creados");
    } else {
      console.log("Los servicios ya están insertados");
    }
  } catch (error) {
    console.log("Error cargando servicios:", error);
  }
}
