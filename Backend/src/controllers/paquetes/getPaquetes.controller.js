import { Destino, Paquete } from "../../models/index.js";

export async function getPaquetes(req, res) {
  try {
    const paquetes = await Paquete.findAll({
      attributes: {
        exclude: ["destinoId"],
      },
      include: {
        model: Destino,
        as: "destino"
      }
    });
    res.json(paquetes);
  } catch (error) {
    res.status(500).json({
      error: "Error obteniendo datos",
    });
  }
}
