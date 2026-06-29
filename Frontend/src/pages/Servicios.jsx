import Card from "../components/Card";

function Servicios() {
  return (
    <section className="servicios">
      <h1>Nuestros Servicios</h1>

      <div className="servicios-container">
        <Card
          icono="🚗"
          titulo="Transporte"
          descripcion="Viaja cómodo y seguro."
        />

        <Card
          icono="🏨"
          titulo="Hoteles"
          descripcion="Hospedajes increíbles."
        />

        <Card icono="🗺️" titulo="Tours" descripcion="Experiencias guiadas." />

        <Card icono="👨‍🏫" titulo="Guías" descripcion="Conoce cada destino." />
      </div>
    </section>
  );
}

export default Servicios;
