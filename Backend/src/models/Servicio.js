import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Servicio = db.define("servicios", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
  },
  descripcion: {
    type: DataTypes.STRING,
  },
});

export default Servicio;
