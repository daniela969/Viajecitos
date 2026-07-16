import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Blog = db.define("blogs", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contenido: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Blog;
