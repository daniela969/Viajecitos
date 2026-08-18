import { Router } from "express";
import { getBlog } from "../controllers/blogs/getBlogs.controller.js";
import { getBlogById } from "../controllers/blogs/getBlogById.controller.js";

const router = Router()

router.get("/", getBlog)
router.get("/:id", getBlogById)

export default router