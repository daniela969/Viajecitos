import Button from "./Button";
import HeroImage from "../assets/hero.jpg";

function Hero() {

return(

<div>

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

<Button texto="Reservar Ahora"/>

</div>

<div className="hero-image">

<img
src={HeroImage}
alt="Viaje"
/>

</div>

</section>

<section className="destinos">

<h2>
Destinos Destacados
</h2>

<div className="destinos-container">

<div className="destino">
<img src={HeroImage}/>
<p>Cartagena</p>
</div>

<div className="destino">
<img src={HeroImage}/>
<p>París</p>
</div>

<div className="destino">
<img src={HeroImage}/>
<p>Bali</p>
</div>

</div>

</section>


<section className="testimonios">

<h2>
Lo que dicen nuestros viajeros
</h2>

<div className="testimonial">

<h1>Maria Sanchez</h1>
★★★★★

<p>
Excelente experiencia
</p>

</div>

<div className="testimonial">

<h1>Juan Perez</h1>

★★★★★
<p>
Muy organizado
</p>

</div>

</section>

</div>

)

}

export default Hero;