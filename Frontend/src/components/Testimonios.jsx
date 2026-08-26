import { useEffect, useState } from "react";

function Testimonios() {
  const [testimonios, setTestimonios] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [indice, setIndice] = useState(0);

  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function obtenerDatos() {
      try {
        const [respuestaTestimonios, respuestaUsuarios] =
          await Promise.all([
            fetch("http://localhost:3001/testimonios"),
            fetch("http://localhost:3001/usuarios"),
          ]);

        if (!respuestaTestimonios.ok) {
          throw new Error("No se pudieron obtener los testimonios");
        }

        if (!respuestaUsuarios.ok) {
          throw new Error("No se pudieron obtener los usuarios");
        }

        const datosTestimonios =
          await respuestaTestimonios.json();

        const datosUsuarios =
          await respuestaUsuarios.json();

        setTestimonios(datosTestimonios);
        setUsuarios(datosUsuarios);

      } catch (error) {
        console.error(error);
        setError("No fue posible cargar los testimonios");
      } finally {
        setCargando(false);
      }
    }

    obtenerDatos();
  }, []);

  if (cargando) {
    return (
      <section className="testimonios">
        <p className="testimonios-mensaje">
          Cargando testimonios...
        </p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="testimonios">
        <p className="testimonios-mensaje">
          {error}
        </p>
      </section>
    );
  }

  if (testimonios.length === 0) {
    return (
      <section className="testimonios">
        <p className="testimonios-mensaje">
          No hay testimonios disponibles.
        </p>
      </section>
    );
  }

  const siguiente = () => {
    setIndice(
      (actual) => (actual + 1) % testimonios.length
    );
  };

  const anterior = () => {
    setIndice(
      (actual) =>
        (actual - 1 + testimonios.length) %
        testimonios.length
    );
  };

  const testimoniosVisibles = [
    testimonios[indice],
    testimonios[(indice + 1) % testimonios.length],
    testimonios[(indice + 2) % testimonios.length],
  ];

  return (
    <section className="testimonios">

      <div className="testimonios-encabezado">

        <span className="testimonios-subtitulo">
          Testimonios
        </span>

        <h2>
          Lo que dicen nuestros viajeros
        </h2>

        <p>
          Descubre las experiencias de quienes han viajado
          con Viajecitos
        </p>

      </div>

      <div className="testimonios-contenedor">

        <div className="testimonios-grid">

          {testimoniosVisibles.map((testimonio) => {

            const usuario = usuarios.find(
              (usuario) =>
                usuario.id === testimonio.usuarioId
            );

            return (
              <article
                className="testimonio-card"
                key={testimonio.id}
              >

                <div className="testimonio-comillas">
                  “
                </div>

                <div className="testimonio-estrellas">

                  {[1, 2, 3, 4, 5].map((estrella) => (

                    <span
                      key={estrella}
                      className={
                        estrella <= testimonio.calificacion
                          ? "estrella activa"
                          : "estrella"
                      }
                    >
                      ★
                    </span>

                  ))}

                </div>

                <h3>
                  {testimonio.titulo}
                </h3>

                <p className="testimonio-comentario">
                  {testimonio.comentario}
                </p>

                <div className="testimonio-usuario">

                  <div className="usuario-avatar">
                    {usuario?.nombre?.charAt(0)}
                  </div>

                  <div className="usuario-info">

                    <strong>
                      {usuario?.nombre}
                    </strong>

                    <span>
                      Viajero con viajecitos
                    </span>

                  </div>

                </div>

              </article>
            );
          })}

        </div>

        <div className="testimonios-controles">

          <button
            className="testimonio-flecha"
            onClick={anterior}
            aria-label="Testimonios anteriores"
          >
            ←
          </button>

          <div className="testimonio-indicadores">

            {testimonios.map((_, index) => (

              <button
                key={index}
                onClick={() => setIndice(index)}
                aria-label={`Ir al testimonio ${index + 1}`}
                className={
                  index === indice
                    ? "indicador activo"
                    : "indicador"
                }
              />

            ))}

          </div>

          <button
            className="testimonio-flecha"
            onClick={siguiente}
            aria-label="Siguientes testimonios"
          >
            →
          </button>

        </div>

      </div>

    </section>
  );
}

export default Testimonios;