import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";
// import dotenv from "dotenv";
// dotenv.config({ path: "./.env.local" });
// or
let port = process?.env?.DB_PORT as string
// dotenv.config({ path: "./.env.local" });
if (!process.env.DB_URL) {
  throw new Error("DB credentials error");
}
const client = new Client({
   connectionString: process.env.DB_URL,


});
// const client = new Client({
//   // connectionString: process.env.DB_URL,
//   host:  process.env.DB_HOST,

//   // port: parseInt(port),
//   user: process.env.DB_USER,
//   database: process.env.DB_DATABASE,
//    password:  process.env.DB_PASSWORD,
//   //password:  "postgre",
  


// });
 
//await client.connect();
await client.connect();
// client.connect();
export const db = drizzle(client);
 