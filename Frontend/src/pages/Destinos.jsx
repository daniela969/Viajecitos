import { useEffect, useState } from "react";

function Destinos() {
  const [destinos, setdestinos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

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
      <h1>Destinos</h1>

      <div className="destinos-grid">
        {destinos.map((destino) => (
          <div className="destino-card" key={destino.nombre}>
            <img
              src={destino.imagen}
            />

            <div className="destino-info">
              <h2>{destino.nombre}</h2>

              <p>{destino.descripcion}</p>

              <button>Ver destino</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Destinos;