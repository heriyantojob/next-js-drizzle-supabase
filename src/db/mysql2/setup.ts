import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config({ path: "./.env.local" });
if (!process.env.DB_URL) {
  throw new Error("DB credentials error");
}

// const connection = mysql.createConnection(process.env.DB_URL);
const connection = mysql.createConnection(
  {
    host:  process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
   // database: "database",
    // password: process.env.DB_PASSWORD,
    password: "",
 
  });
export const db = drizzle(connection);
