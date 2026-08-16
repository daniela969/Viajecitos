import { Testimonial } from "../models/index.js";
import dataTestimonios from "../data/dataTestimonios.js";

async function cargarTestimonios() {
  try {
    const cantidadTestimonios = await Testimonial.count();

    if (cantidadTestimonios === 0) {
      await Testimonial.bulkCreate(dataTestimonios);
      console.log("Testimonios de prueba creados");
    } else {
      console.log("Ya existen Testimonios, no se hará inserción");
    }
  } catch (error) {
    console.log("Error cargando Testimonios:", error);
  }
}

export default cargarTestimonios;
