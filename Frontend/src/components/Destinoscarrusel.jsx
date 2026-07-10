import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Destinoscarrusel() {

 const [destinos, setDestinos] = useState([]);
  useEffect(() => {
  fetch("http://localhost:3001/destinos")
    .then((respuesta) => respuesta.json())
    .then((datos) => {
       console.log(datos);
      setDestinos(datos);
    });
}, []);
  return (
    <section className="destinos">

      <h2>Destinos Destacados</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        {destinos.map((destino) => (
         <SwiperSlide key={destino.id}>

<div className="destino-card">

<img

src={destino.imagen}

alt={destino.nombre}

/>

<div className="destino-overlay">

<h2>{destino.nombre}</h2>

<p>{destino.descripcion}</p>

<button>Explorar destino</button>

</div>

</div>

</SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default Destinoscarrusel;