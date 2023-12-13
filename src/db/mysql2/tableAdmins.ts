import { mysqlTable, serial, varchar,tinyint,datetime,int } from "drizzle-orm/mysql-core";
import dotenv from "dotenv";
dotenv.config({ path: "./.env.local" });
let prefix =process.env.DB_PREFIX
// let prefix ="bos_"
const tableAdmin= mysqlTable(prefix+"admins", {
   // id_user: serial("id_user").primaryKey(),
    id_admin: int("id_admin").primaryKey().autoincrement(),
    username: varchar("username", { length: 256 }).notNull().unique(),
    id_admin_role: int("id_admin_role").notNull(),
    name: varchar("name", { length: 256 }).notNull(),
    email: varchar("email", { length: 256 }).notNull().unique(),
    password: varchar("password", { length: 256 }).notNull(),
    about: varchar("password", { length: 500 }).notNull(),
    phone: varchar("phone", { length: 30 }),
    user_verified :tinyint("user_verified", { length: 1 }),
    //0 not active 1 active 2 block
    status :tinyint("status", { length: 1 }),
    created_at: datetime('created_at', { mode: 'date', fsp: 6 }),
    updated_at: datetime('updated_at', { mode: 'date', fsp: 6 }),
    deleted_at: datetime('deleted_at', { mode: 'date', fsp: 6 }),
  });
  export default tableAdmin



