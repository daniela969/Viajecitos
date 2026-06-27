import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  try {
    res.json({ msg: "Conexión establecida" });
  } catch (error) {
    res.status(500).json({
      error: "Error obteniendo datos",
    });
  }
});

export default router
