import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    function cambiarColor() {
      if (window.scrollY > 80) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    }

    window.addEventListener("scroll", cambiarColor);

    return () => {
      window.removeEventListener("scroll", cambiarColor);
    };
  }, []);

  return (
    <nav className={scroll ? "nav-scroll" : "nav"}>
      <h2>Viajecitos</h2>

      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li>
          <Link to="/servicios">Servicios</Link>
        </li>

        <li>
          <Link to="/destinos">Destinos</Link>
        </li>

        <li>
          <Link to="/paquetes">Paquetes</Link>
        </li>

        <li>
          <Link to="/contactos">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
