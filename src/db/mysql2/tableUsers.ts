import { mysqlTable, serial, varchar,tinyint,datetime,int } from "drizzle-orm/mysql-core";
import dotenv from "dotenv";
dotenv.config({ path: "./.env.local" });
let prefix =process.env.DB_PREFIX
// let prefix ="bos_"
const tableUser = mysqlTable(prefix+"users", {
   // id_user: serial("id_user").primaryKey(),
    id_user: int("id_user").primaryKey().autoincrement(),
    username: varchar("username", { length: 256 }).notNull().unique(),
    name: varchar("name", { length: 256 }).notNull(),
    email: varchar("email", { length: 256 }).notNull().unique(),
    password: varchar("password", { length: 256 }).notNull(),
    about: varchar("password", { length: 500 }).notNull(),
    phone: varchar("phone", { length: 30 }),
    user_verified :tinyint("user_verified", { length: 1 }),
    
  //0 not active 1 active 2 block
    status :tinyint("status", { length: 1 }),
    //"0 no ; 1 contributor"
    contributor :tinyint("contributor", { length: 1 }),
    avatar_path: varchar("avatar_path", { length: 500 }).notNull(),
    created_at: datetime('created_at', { mode: 'date', fsp: 6 }),
    updated_at: datetime('updated_at', { mode: 'date', fsp: 6 }),
    deleted_at: datetime('deleted_at', { mode: 'date', fsp: 6 }),
  });
  export default tableUser



