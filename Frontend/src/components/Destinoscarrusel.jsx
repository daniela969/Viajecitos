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
    descripcion: "Descubre las playas, la historia y el encanto de la ciudad amurallada.",
    imagen: Cartagena,
  },
  {
    id: 2,
    nombre: "París",
    descripcion: "La ciudad del amor te espera con su arte, gastronomía y monumentos.",
    imagen: Paris,
  },
  {
    id: 3,
    nombre: "Bali",
    descripcion: "Disfruta de templos, naturaleza y playas paradisíacas.",
    imagen: Bali,
  },
  {
    id: 4,
    nombre: "San Andrés",
    descripcion: "Conoce el mar de los siete colores y vive una experiencia inolvidable.",
    imagen: SanAndres,
  },
  {
    id: 5,
    nombre: "Medellín",
    descripcion: "Una ciudad moderna rodeada de montañas y cultura.",
    imagen: Medellin,
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
              <img src={destino.imagen} alt={destino.nombre} />

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