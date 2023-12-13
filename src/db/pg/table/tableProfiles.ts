import { integer, pgTable, serial,uuid, varchar,smallint } from "drizzle-orm/pg-core";
import dotenv from "dotenv";
import { authUsers } from "../scehmaAuth";


const { DataTypes } = require('drizzle-orm');
dotenv.config({ path: "./.env.local" });
let prefix =process.env.DB_PREFIX
// let prefix ="bos_"
// const tableProfiles = pgTable(prefix+"profiles", {
//    // id_user: serial("id_user").primaryKey(),
//     id: uuid("id").primaryKey(),

//     first_name : varchar("first_name ", { length: 256 }),
//     last_name : varchar("last_name ", { length: 256 }),
  
//   });

  export const tableProfiles = pgTable(prefix+'profiles', {
    //id: uuid('id').primaryKey().references(authUsers).onDelete('CASCADE'),
   // id: uuid('id').primaryKey().references(() => authUsers.id),
    id: uuid('id').primaryKey(),
    //.references(() => authUsers.id, { onDelete: 'cascade' }),
    first_name : varchar("first_name ", { length: 256 }),
    last_name : varchar("last_name ", { length: 256 }),
    username : varchar("username ", { length: 256 }),
    id_role : integer("id_role "),
    admin_access : smallint("admin_access"),
  });

 
  
  export default tableProfiles







