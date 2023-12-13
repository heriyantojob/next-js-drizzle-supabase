import { mysqlTable, serial, varchar,tinyint,datetime ,bigint,int,references} from "drizzle-orm/mysql-core";
import dotenv from "dotenv";
import tableUser from "./tableUsers";
import { users } from "../schema";
dotenv.config({ path: "./.env.local" });

let prefix =process.env.DB_PREFIX

const tableAdminTokens = mysqlTable(prefix+"admin_tokens", {
    id_admin_token: int("id_admin_token").primaryKey().autoincrement(),
    id_user: int("id_user", { mode: 'number' }),
    refresh_token: varchar("refresh_token", { length: 256 }).notNull().unique(),
    ip: varchar("ip", { length: 256 }),
    user_agent: varchar("user_agent", { length: 256 }),
    created_at: datetime('created_at', { mode: 'date', fsp: 6 }),
    updated_at: datetime('updated_at', { mode: 'date', fsp: 6 }),
    deleted_at: datetime('deleted_at', { mode: 'date', fsp: 6 }),
  },
  );
  export default tableAdminTokens



