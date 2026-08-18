import { Router } from "express";
import { getPaquetes } from "../controllers/paquetes/getPaquetes.controller.js";
import { getPaqueteById } from "../controllers/paquetes/getPaqueteById.controller.js";


const router = Router();

router.get("/", getPaquetes);
router.get("/:id", getPaqueteById)

export default router;
