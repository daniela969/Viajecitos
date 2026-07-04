import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Cartagena from "../assets/cartagena.jpg";
import Paris from "../assets/paris.jpg";
import Bali from "../assets/bali.jpg";
import SanAndres from "../assets/sanandres.jpg";
import Medellin from "../assets/medellin.jpg";

const destinos = [
  {
    id: 1,
    nombre: "Cartagena",
    imagen: Cartagena,
    descripcion: "Historia, playas y cultura en un solo lugar.",
  },
  {
    id: 2,
    nombre: "París",
    imagen: Paris,
    descripcion: "La ciudad de la luz y el amor.",
  },
  {
    id: 3,
    nombre: "Bali",
    imagen: Bali,
       descripcion: "Templos, naturaleza y playas paradisíacas.",
  },
  {
    id: 4,
    nombre: "San Andrés",
    imagen: SanAndres,
    descripcion: "Disfruta del mar de los siete colores.",
  },
  {
    id: 5,
    nombre: "Medellín",
    imagen: Medellin,
    descripcion: "La ciudad de la eterna primavera te espera.",
  },
];

function Destinoscarrusel() {
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