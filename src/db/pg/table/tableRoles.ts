import { pgTable, serial, varchar,smallint,timestamp,integer } from "drizzle-orm/pg-core";
import dotenv from "dotenv";
dotenv.config({ path: "./.env.local" });
let prefix =process.env.DB_PREFIX
// let prefix ="bos_"
const tableRoles= pgTable(prefix+"roles", {
   // id_user: serial("id_user").primaryKey(),
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
   
    status :smallint("status"),
    created_at: timestamp('created_at'),
    updated_at: timestamp('updated_at'),
    deleted_at: timestamp('deleted_at'),
  });
  export default tableRoles



