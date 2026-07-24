import { useEffect, useState } from "react";
import Button from "../components/Button";

function Servicios() {
  const [servicios, setServicios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function obtenerServicios() {
      try {
        const respuesta = await fetch("http://localhost:3001/servicios");

        if (!respuesta.ok) {
          throw new Error("No se pudieron obtener los servicios");
        }

        const datos = await respuesta.json();
        setServicios(datos);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    }

    obtenerServicios();
  }, []);

  if (cargando) return <h2>Cargando servicios...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <section className="pagina-servicios">
      <div className="titulo-servicios">
        <h1>Nuestros Servicios</h1>

        <p>
          Diseñamos experiencias para que disfrutes cada viaje con comodidad,
          seguridad y el mejor acompañamiento.
        </p>
      </div>

      {servicios.map((servicio, index) => (
        <section
          key={servicio.id}
          className={`servicio ${index % 2 === 0 ? "" : "reverse"}`}
        >
          <div className="servicio-imagen">
            <img src={servicio.imagen} alt={servicio.nombre} />
          </div>

          <div className="servicio-info">
            <h2>{servicio.nombre}</h2>

            <p>{servicio.descripcion}</p>

            <Button
              texto="Más información"
            />
          </div>
        </section>
      ))}
    </section>
  );
}

export default Servicios;
