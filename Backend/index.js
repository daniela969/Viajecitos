import express from "express";
import cors from "cors";
import inicioRouter from "./src/routes/inicio.route.js";
import usuarioRouter from "./src/routes/usuario.route.js";
import destinoRouter from "./src/routes/destinos.route.js";
import servicioRouter from "./src/routes/servicios.route.js";
import paqueteRouter from "./src/routes/paquetes.route.js"
import testimoniosRouter from "./src/routes/testimonios.route.js"
import db from "./src/config/db.js";
import cargarDatos from "./src/seeders/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", inicioRouter);
app.use("/usuarios", usuarioRouter);
app.use("/destinos", destinoRouter);
app.use("/servicios", servicioRouter);
app.use("/paquetes", paqueteRouter)
app.use("/testimonios", testimoniosRouter)

try {
  await db.authenticate();

  console.log("Conexión correcta a la base de datos");

  await db.sync({ force: true });

  console.log("Tablas sincronizadas");

  await cargarDatos();
} catch (error) {
  console.log("mensaje error: ", error);
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
