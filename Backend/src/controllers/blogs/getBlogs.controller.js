import { Blog } from "../../models/index.js";

export async function getBlog(req, res) {
  try {
    const blogs = await Blog.findAll();
    res.json(blogs);
  } catch (error) {
    res.status(500).json({
      error: "Error obteniendo datos",
    });
  }
}
