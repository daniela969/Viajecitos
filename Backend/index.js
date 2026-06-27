import express from "express";
import cors from "cors";
import inicioRouter from "./src/routes/inicio.router.js";
import usuarioRouter from "./src/routes/usuario.router.js";
import destinoRouter from "./src/routes/destinos.router.js";
import db from "./src/config/db.js";
import "./src/models/Usuario.js";
import cargarDatos from "./src/seeders/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", inicioRouter);
app.use("/usuarios", usuarioRouter);
app.use("/destinos", destinoRouter);

try {
  await db.authenticate();

  console.log("Conexión correcta a la base de datos");

  await db.sync({ alter: true });

  console.log("Tablas sincronizadas");

  await cargarDatos();
} catch (error) {
  console.log("mensaje error: ", error);
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
