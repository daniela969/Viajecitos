import { Usuario } from "../../models/index.js";

export async function getUsuarios(req, res) {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({
      error: "Error obteniendo datos",
    });
  }
}
