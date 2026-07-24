import { useEffect, useState } from "react";

function Destinos() {
  const [destinos, setDestinos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");
  const [modalAbierto, setModalAbierto] = useState(false);
  const [destinoSeleccionado, setDestinoSeleccionado] = useState(null);

  function abrirModal(destino) {
    setDestinoSeleccionado(destino);
    setModalAbierto(true);
  }

  function cerrarModal() {
    setModalAbierto(false);
    setDestinoSeleccionado(null);
  }

  useEffect(() => {
    async function obtenerDestinos() {
      try {
        const respuesta = await fetch("http://localhost:3001/destinos");

        if (!respuesta.ok) {
          throw new Error("No se pudieron obtener los destinos");
        }

        const datos = await respuesta.json();
        setDestinos(datos);
      } catch (err) {
         setError(err.message);
      } finally {
        setCargando(false);
      }
    }

    obtenerDestinos();
  }, []);

  if (cargando) return <h2>Cargando destinos...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <section className="pagina-destinos">
      <div className="titulo-destinos">
        <h1>Descubre nuestros destinos</h1>

        <p>
          Explora lugares únicos alrededor del mundo y vive experiencias
          inolvidables.
        </p>
      </div>

      <div className="destinos-grid">
        {destinos.map((destino) => (
          <article className="destino-card" key={destino.id}>
            <img src={destino.imagen} alt={destino.nombre} />

            <div className="destino-info">
              <h2>{destino.nombre}</h2>

              <p>
                {destino.descripcion.length > 140
                  ? destino.descripcion.slice(0, 140) + "..."
                  : destino.descripcion}
              </p>

              <button onClick={() => abrirModal(destino)}>Ver más</button>
            </div>
          </article>
        ))}
      </div>

      {modalAbierto && (
        <div className="modal" onClick={cerrarModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="cerrar" onClick={cerrarModal}>
              ✕
            </button>

            <img
              src={destinoSeleccionado.imagen}
              alt={destinoSeleccionado.nombre}
            />

            <div className="modal-info">
              <h2>{destinoSeleccionado.nombre}</h2>

              <p>{destinoSeleccionado.descripcion}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Destinos;
