import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Reserva = db.define("reservas", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  fechaInicio: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  fechaFin: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  personas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Reserva;
