import dotenv from "dotenv";
dotenv.config({ path: "./.env.local" });

export const configDBMysql  ={
  // schema: "./src/db/schema.ts",
  // out: "./src/db/migrations",
  schema: "./src/db/mysql2/schema.ts",
  out: "./src/db/mysql2/migrations",

  driver: "mysql2",
  dbCredentials: {
    connectionString: process.env.DB_URL!,
    //connectionString: "mysql://root@127.0.0.1:3306/project_targetviral" 
    // host:  process.env.DB_HOST,
    // user: process.env.DB_USER,
    // database: process.env.DB_DATABASE,
    // password: process.env.DB_PASSWORD,
  },
  verbose: true,
  strict: true,
} 

export const configDBPG  ={
  schema: "./src/db/pg/schema.ts",
  out: "./src/db/pg/migrations",
  driver:"pg",
  dbCredentials: {
    connectionString: process.env.DB_URL,
    //connectionString: "mysql://root@127.0.0.1:3306/project_targetviral" 
    // host:  process.env.DB_HOST,
    // user: process.env.DB_USER,
    // database: process.env.DB_DATABASE,
    // password:  process.env.DB_PASSWORD,
  },


  verbose: true,
  strict: true,
} 
 