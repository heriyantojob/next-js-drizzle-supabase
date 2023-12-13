import type { Config } from "drizzle-kit";
import dotenv from "dotenv";
import {configDBPG} from "./configDB"
// import {configDBMysql} from "./configDB"
// import configDB from "./configDB"
// import configDB from "./configDB"
// dotenv.config({ path: "./.env.local" });

// const configDBMysql  ={
//   schema: "./src/db/schema.ts",
//   out: "./src/db/migrations",
//   driver: "mysql2",
//   dbCredentials: {
//     connectionString: process.env.DB_URL!,
//     //connectionString: "mysql://root@127.0.0.1:3306/project_targetviral" 
//     host:  process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_DATABASE,
//   },
//   verbose: true,
//   strict: true,
// } 
export default configDBPG satisfies Config;
