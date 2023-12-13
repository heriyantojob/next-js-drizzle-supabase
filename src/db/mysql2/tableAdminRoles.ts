import { mysqlTable, serial, varchar,tinyint,datetime,int } from "drizzle-orm/mysql-core";
import dotenv from "dotenv";
dotenv.config({ path: "./.env.local" });
let prefix =process.env.DB_PREFIX
// let prefix ="bos_"
const tableAdminRoles= mysqlTable(prefix+"admin_roles", {
   // id_user: serial("id_user").primaryKey(),
    id_admin_role: int("id_admin").primaryKey().autoincrement(),
    name: varchar("name", { length: 256 }).notNull(),
   
    status :tinyint("status", { length: 1 }),
    created_at: datetime('created_at', { mode: 'date', fsp: 6 }),
    updated_at: datetime('updated_at', { mode: 'date', fsp: 6 }),
    deleted_at: datetime('deleted_at', { mode: 'date', fsp: 6 }),
  });
  export default tableAdminRoles



