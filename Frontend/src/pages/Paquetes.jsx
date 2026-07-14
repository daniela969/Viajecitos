import { useEffect, useState } from "react";

function Paquetes() {
  const [paquetes, setPaquetes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function obtenerPaquetes() {
      try {
        const respuesta = await fetch("http://localhost:3001/paquetes");

        if (!respuesta.ok) {
          throw new Error("No se pudieron obtener los paquetes");
        }

        const datos = await respuesta.json();
        setPaquetes(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }

    obtenerPaquetes();
  }, []);

  if (cargando) return <h2>Cargando paquetes...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <section className="pagina-paquetes">
      <h1>Paquetes Turísticos</h1>

      <div className="paquetes-grid">
        {paquetes.map((paquete) => (
          <div className="paquete-card" key={paquete.nombre}>
            <img
              src={paquete.imagen}
              alt={paquete.nombre}
            />

            <div className="paquete-info">
              <h2>{paquete.nombre}</h2>

              <p>{paquete.descripcion}</p>

              <h3>${paquete.precio}</h3>

              <button>Reservar</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Paquetes;