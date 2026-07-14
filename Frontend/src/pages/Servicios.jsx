import { useEffect, useState } from "react";

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
      <h1>Nuestros Servicios</h1>

      <div className="servicios-grid">
        {servicios.map((servicio) => (
          <div className="servicio-card" key={servicio.id}>
          
            <div className="servicio-info">
              <h2>{servicio.nombre}</h2>
              <p>{servicio.descripcion}</p>
              <button>Más información</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicios;