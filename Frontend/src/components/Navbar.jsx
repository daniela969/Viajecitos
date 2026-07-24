import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isscroll, setIsScroll] = useState(false);

  useEffect(() => {
    function cambiarColor() {
      setIsScroll(window.scrollY > 80);
    }

    window.addEventListener("scroll", cambiarColor);

    return () => {
      window.removeEventListener("scroll", cambiarColor);
    };
  }, []);

  return (
    <nav className={`navbar ${isscroll ? "navbar-scroll" : ""}`}>
      <Link to="/" className="logo">
        <h2>Viajecitos</h2>
      </Link>

      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>

        <li>
          <Link to="/destinos">Destinos</Link>
        </li>

        <li>
          <Link to="/paquetes">Paquetes</Link>
        </li>

        <li>
          <Link to="/servicios">Servicios</Link>
        </li>

        <li>
          <Link to="/blog">Blog</Link>
        </li>

        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
