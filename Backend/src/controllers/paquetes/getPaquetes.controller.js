import { Paquete } from "../../models";

export async function getPaquetes(req, res) {
  try {
    const paquetes = await Paquete.findAll();
    res.json(paquetes);
  } catch (error) {
    res.status(500).json({
      error: "Error obteniendo datos",
    });
  }
}
