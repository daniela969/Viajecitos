import { useState } from "react";

function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });

  function manejarCambio(e) {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  }

  function enviarFormulario(e) {
    e.preventDefault();

    console.log(formulario);

    alert("Mensaje enviado correctamente");

    setFormulario({
      nombre: "",
      correo: "",
      asunto: "",
      mensaje: "",
    });
  }

  return (
    <section className="contacto">

      <h1>Contáctanos</h1>

      <p>
        Estamos listos para ayudarte a planear tu próxima aventura.
      </p>

      <div className="contacto-container">

        <div className="contacto-info">

          <h2>Información</h2>

          <p><strong>📍 Dirección:</strong> Ubaté, Cundinamarca</p>

          <p><strong>📞 Teléfono:</strong> +57 300 000 0000</p>

          <p><strong>✉️ Correo:</strong> contacto@viajecitos.com</p>

        </div>

        <form
          className="contacto-form"
          onSubmit={enviarFormulario}
        >

          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={formulario.nombre}
            onChange={manejarCambio}
            required
          />

          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            value={formulario.correo}
            onChange={manejarCambio}
            required
          />

          <input
            type="text"
            name="asunto"
            placeholder="Asunto"
            value={formulario.asunto}
            onChange={manejarCambio}
            required
          />

          <textarea
            name="mensaje"
            rows="6"
            placeholder="Escribe tu mensaje..."
            value={formulario.mensaje}
            onChange={manejarCambio}
            required
          />

          <button type="submit">
            Enviar mensaje
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contacto;