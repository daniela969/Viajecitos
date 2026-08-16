import { Router } from "express";
import { getBlog } from "../controllers/blogs/getBlogs.controller.js";

const router = Router()

router.get("/", getBlog)

export default router