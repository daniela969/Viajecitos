import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Paquete = db.define("paquetes", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  incluye: {
    type: DataTypes.JSON,
  },
  duracion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destacado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default Paquete;
