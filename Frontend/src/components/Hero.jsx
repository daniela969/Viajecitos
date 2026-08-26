import Button from "./Button";
import HeroImage from "../assets/hero.png";
import DestinosCarrusel from "./DestinosCarrusel";
import Testimonios from "./Testimonios";

function Hero() {

return(
<>
<section className="hero">

<div className="hero-text">

<h1>
Explora el mundo con Viajecitos
</h1>

<p>
Descubre experiencias únicas,
encuentra destinos increíbles
y reserva fácilmente.
</p>

<Button texto="Reservar Ahora" 
className="btn-principal"
 />

</div>

<div className="hero-image">
<img src={HeroImage} alt= "Viaje" />
</div>

</section>

<DestinosCarrusel/>
<Testimonios/>

</>

);

}

export default Hero;