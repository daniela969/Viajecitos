import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Destino = db.define("destinos", {
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
  imagen: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  destacado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default Destino;
