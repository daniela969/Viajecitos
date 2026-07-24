import { useEffect, useState } from "react";
import Button from "../components/Button";

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
      <div className="titulo-paquetes">
        <h1>Nuestros paquetes</h1>

        <p>
          Descubre experiencias diseñadas para que disfrutes cada destino sin
          preocuparte por los detalles.
        </p>
      </div>

      <div className="paquetes-grid">
        {paquetes.map((paquete) => (
          <article className="paquete-card" key={paquete.id}>
            <img src={paquete.imagen} alt={paquete.nombre} />

            <div className="paquete-info">
              <h2>{paquete.nombre}</h2>

              <div className="paquete-detalle">
                <span>📅</span>
                <p>{paquete.duracion}</p>
              </div>

              <div className="paquete-incluye">
                <h4>¿Qué incluye?</h4>

                <ul>
                  {paquete.incluye.slice(0, 4).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                {paquete.incluye.length > 4 && (
                  <p className="paquete-beneficios">
                    + {paquete.incluye.length - 4} beneficios más
                  </p>
                )}
              </div>

              <div className="paquete-precio">
                <small>DESDE</small>
                <h3>${paquete.precio}</h3>
              </div>

              <Button
                texto="Reservar ahora"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Paquetes;
