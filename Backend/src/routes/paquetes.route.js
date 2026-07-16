import { Router } from "express";
import { getPaquetes } from "../controllers/paquetes/getPaquetes.controller.js";


const router = Router();

router.get("/", getPaquetes);

export default router;
