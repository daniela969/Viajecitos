import express from "express"
import cors from 'cors'
import inicioRouter from "./src/routes/inicio.router.js";
import db from "./src/config/db.js";
import "./src/models/index.js"

// Conexión a DB
try {
  await db.authenticate();
  console.log('Conexión correcta a la base de datos')
  await db.sync({alter:true})
  console.log("Tablas sincronizadas")
} catch (error) {
  
}

const app = express()
app.use(cors())
app.use(express.json())

app.use("/", inicioRouter)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});