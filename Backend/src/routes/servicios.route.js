import { Router } from "express";
import { getServicios } from "../controllers/servicios/getServicios.controller.js";

const router = Router();
router.get("/", getServicios);

export default router;
