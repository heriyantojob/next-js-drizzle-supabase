import { mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";
import tableUser from "./tableUsers";
import tableUserTokens from "./tableUserTokens";
import { relations } from 'drizzle-orm';
import tableAdmins from "./tableAdmins";
import tableAdminRoles from "./tableAdminRoles";
import tableAdminTokens from "./tableAdminTokens";

export const users = tableUser
export const usersTokens = tableUserTokens
export const admins = tableAdmins
export const adminRole = tableAdminRoles
export const adminTokens = tableAdminTokens
