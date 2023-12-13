import { mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  email: varchar("email", { length: 256 }).notNull().unique()
});

export const admin = mysqlTable("admin", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  email: varchar("email", { length: 256 }).notNull().unique()
});

export const file = mysqlTable("file", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  created_at: varchar("created_at", { length: 256 })
});

export const asset = mysqlTable("asset", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  created_at: varchar("created_at", { length: 256 })
});

export const goal = mysqlTable("goal", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  created_at: varchar("created_at", { length: 256 })
});

