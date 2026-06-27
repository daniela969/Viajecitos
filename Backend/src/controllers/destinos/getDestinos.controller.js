import { Destino } from "../../models/index.js";

export async function getDestinos(req, res) {
  try {
    const destinos = await Destino.findAll();
    res.json(destinos);
  } catch (error) {
    res.status(500).json({
      error: "Error obteniendo datos",
    });
  }
}
