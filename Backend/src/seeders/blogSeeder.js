import { Blog } from '../models/index.js'   
import dataBlog from '../data/dataBlog.js'

async function cargarBlog() {
    try {
    const cantidadBlog = await Blog.count();

    if (cantidadBlog === 0) {
      await Blog.bulkCreate(dataBlog);
      console.log("Blogs de prueba creados");
    } else {
      console.log("Ya existen blogs, no se hará inserción");
    }
  } catch (error) {
    console.log("Error cargando blogs:", error);
  }
}

export default cargarBlog