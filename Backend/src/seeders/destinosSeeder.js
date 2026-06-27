import { Destino } from '../models/index.js'    
import dataDestinos from '../data/dataDestinos.js'

async function cargarDestinos() {
    try {
    const cantidadDestinos = await Destino.count();

    if (cantidadDestinos === 0) {
      await Destino.bulkCreate(dataDestinos);
      console.log("Destinos de prueba creados");
    } else {
      console.log("Ya existen destinos, no se hará inserción");
    }
  } catch (error) {
    console.log("Error cargando destinos:", error);
  }
}

export default cargarDestinos