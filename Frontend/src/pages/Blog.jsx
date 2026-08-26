import { useEffect, useState } from "react";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [blogSeleccionado, setBlogSeleccionado] = useState(null);

  useEffect(() => {
    async function obtenerBlogs() {
      try {
        const respuesta = await fetch("http://localhost:3001/blog");

        if (!respuesta.ok) {
          throw new Error("No se pudieron obtener los blogs");
        }

        const datos = await respuesta.json();

        setBlogs(datos);
      } catch (error) {
        console.error(error);
        setError("No fue posible cargar los artículos");
      } finally {
        setCargando(false);
      }
    }

    obtenerBlogs();
  }, []);

  const abrirModal = (blog) => {
    setBlogSeleccionado(blog);
  };
  const cerrarModal = () => {
    setBlogSeleccionado(null);
  };

  if (cargando) {
    return (
      <section className="blog">
        <p className="blog-mensaje">Cargando artículos...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="blog">
        <p className="blog-mensaje">{error}</p>
      </section>
    );
  }

  return (
    <section className="blog">
      <div className="blog-encabezado">
        <span className="blog-subtitulo">Descubre el mundo</span>

        <h2>Historias que inspiran a viajar</h2>

        <p>
          Consejos, experiencias y destinos para ayudarte a descubrir nuevos
          lugares y vivir aventuras inolvidables.
        </p>
      </div>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <article className="blog-card" key={blog.id}>
            <div className="blog-imagen">
              <img src={blog.imagen} alt={blog.titulo} />
            </div>

            <div className="blog-contenido">
              <h3>{blog.titulo}</h3>

              <p>
                {blog.contenido.length > 180
                  ? blog.contenido.substring(0, 180) + "..."
                  : blog.contenido}
              </p>

              <button className="blog-boton" 
              onClick={() => abrirModal(blog)}>
                Leer más
              </button>
            </div>
          </article>
        ))}
      </div>

      {blogSeleccionado && (
        <div className="modal"
          onClick={cerrarModal}>

          <div className="blog-modal" 
          onClick={(e) => e.stopPropagation()}>

            <button
              className="blog-modal-cerrar"
              onClick={cerrarModal}
            >
              x
            </button>

            <img
              className="blog-modal-imagen"
              src={blogSeleccionado.imagen}
              alt={blogSeleccionado.titulo}
            />

            <div className="blog-modal-contenido">
              <p className="blog-modal-fecha">
                {blogSeleccionado.fecha}</p>

              <h2>{blogSeleccionado.titulo}</h2>

              <p className="blog-modal-contenido">
                {blogSeleccionado.contenido}
              </p>
              <button className="blog-modal-boton" 
              onClick={cerrarModal}>
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Blog;
