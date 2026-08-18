import { Blog } from "../../models/index.js";

export async function getBlogById(req, res) {
  try {
    const blog = await Blog.findByPk(req.params.id);
    if (!blog) {
      return res.status(404).json({
        error: "Entrada de blog no encontrada",
      });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({
      error: "Error obteniendo datos",
    });
  }
}
