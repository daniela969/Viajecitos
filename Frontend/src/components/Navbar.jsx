import { Link } from "react-router-dom";
import "../App.css";

function Navbar(){

return(

<nav className="Navbar">

<h2>Viajecitos</h2>

<ul>

<li><Link to="/">Inicio</Link></li>

<li><Link to="/servicios">Servicios</Link></li>

<li><Link to="/destinos">Destinos</Link></li>

<li><Link to="/paquetes">Paquetes</Link></li>

<li><Link to="/contacto">Contacto</Link></li>

</ul>

</nav>

)

}

export default Navbar