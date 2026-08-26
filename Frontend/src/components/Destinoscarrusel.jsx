import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Button from "./Button";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function DestinosCarrusel() {
  const [destinos, setDestinos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function obtenerDestinos() {
      try {
        const respuesta = await fetch(
          "http://localhost:3001/destinos"
        );

        if (!respuesta.ok) {
          throw new Error("No se pudieron obtener los destinos");
        }

        const data = await respuesta.json();

        setDestinos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setCargando(false);
      }
    }

    obtenerDestinos();
  }, []);

  if (cargando) {
    return <p>Cargando destinos...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="destinos">
      <h2>Destinos destacados</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={destinos.length > 1}
        spaceBetween={30}
        slidesPerView={1}
      >
        {destinos.map((destino) => (
          <SwiperSlide key={destino.id}>
            <div className="destino-slide">

              <img
                src={destino.imagen}
                alt={destino.nombre}
              />

              <div className="destino-overlay">

                <h2>{destino.nombre}</h2>


                <Button texto="Explorar destino" />

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default DestinosCarrusel;