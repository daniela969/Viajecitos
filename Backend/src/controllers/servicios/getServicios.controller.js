import { Servicio } from "../../models/index.js";

export async function getServicios(req, res) {
  try {
    const servicios = await Servicio.findAll();
    res.json(servicios);
  } catch (error) {
    res.status(500).json({
      error: "Error obteniendo datos",
    });
  }
}
