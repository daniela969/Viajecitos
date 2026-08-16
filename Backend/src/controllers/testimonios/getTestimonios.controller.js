import { Testimonial, Usuario } from "../../models/index.js";

export async function getTestimonial(req, res) {
  try {
    const testimonios = await Testimonial.findAll({
      attributes: {
        exclude: ["usuarioId"],
      },
      include: {
        model: Usuario,
        as: "usuario",
      },
    });
    res.json(testimonios);
  } catch (error) {
    res.status(500).json({
      error: "Error obteniendo datos",
    });
  }
}
