import Button from "./Button";
import HeroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Explora el mundo con Viajecitos</h1>

        <p>
          Descubre experiencias únicas, encuentra destinos increíbles y reserva
          fácilmente.
        </p>

        <Button texto="Reservar Ahora" />
      </div>

      <div className="hero-image">
        <img src={HeroImage} alt="Viaje" />
      </div>
    </section>
  );
}

export default Hero;
