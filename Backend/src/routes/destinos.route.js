import { Router } from "express";
import { getDestinos } from "../controllers/destinos/getDestinos.controller.js";

const router = Router();

router.get("/", getDestinos);

export default router;
