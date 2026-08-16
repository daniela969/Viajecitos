import { Router } from "express";
import { getTestimonial } from "../controllers/testimonios/getTestimonios.controller.js";

const router = Router();

router.get("/", getTestimonial);

export default router;
