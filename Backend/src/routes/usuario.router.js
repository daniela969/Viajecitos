import { Router } from "express";
import { getUsuarios } from "../controllers/usuarios/getUsuarios.controller.js";

const router = Router();

router.get("/", getUsuarios);

export default router;
