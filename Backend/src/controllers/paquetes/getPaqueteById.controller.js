import { Destino, Paquete } from "../../models/index.js";
export async function getPaqueteById(req, res) {
  try {
    const paquete = await Paquete.findByPk(req.params.id, {
      attributes: {
        exclude: ["destinoId"],
      },
      include: {
        model: Destino,
        as: "destino",
      },
    });
    if (!paquete) {
      return res.status(404).json({
        error: "Paquete no encontrado",
      });
    }

    res.json(paquete);
  } catch (error) {
    res.status(500).json({
      error: "Error obteniendo datos",
    });
  }
}
