import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config({ path: ".env" });
const { DB_NOMBRE, DB_USER, DB_PASSWORD } = process.env;

const db = new Sequelize("viajes", "root", "1234", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  define: {
    timestamps: true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

export default db;
