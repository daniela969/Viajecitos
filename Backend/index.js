import express from "express"
import cors from 'cors'
import pruebaRouter from "./src/routes/prueba.router.js";

const app = express()
app.use(cors())
app.use(express.json())

app.use("/prueba", pruebaRouter)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});