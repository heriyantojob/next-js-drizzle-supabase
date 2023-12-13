import { pgTable, serial, varchar,timestamp } from "drizzle-orm/pg-core";
import tableProfiles from "./table/tableProfiles";
import { authSchema, authUsers } from "./scehmaAuth";
import { relations } from "drizzle-orm";
import tableRoles from "./table/tableRoles";
// export const users = pgTable("users", {
//   id: serial("id").primaryKey(),
//   name: varchar("name", { length: 256 }).notNull(),
//   email: varchar("email", { length: 256 }).notNull().unique()
// });

// export const admin = pgTable("admin", {
//   id: serial("id").primaryKey(),
//   name: varchar("name", { length: 256 }).notNull(),
//   email: varchar("email", { length: 256 }).notNull().unique()
// });

export const profiles = tableProfiles
export const roles = tableRoles

export const userRelations = relations(authUsers, ({ one, many }) => ({
  profile: one(profiles, {
    fields: [authUsers.id],
    references: [profiles.id],
  }),
  // posts: many(posts),
}));

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),

  created_at: timestamp("created_at"),
  content: varchar("content", { length: 256 }).notNull(),
  user_id: varchar("user_id", { length: 256 }).notNull(),
});
export const userFiles = pgTable("user_files", {
  id: serial("id").primaryKey(),

  created_at: timestamp("created_at"),
  content: varchar("content", { length: 256 }).notNull(),

});
// export const file = pgTable("file", {
//   id: serial("id").primaryKey(),
//   name: varchar("name", { length: 256 }).notNull(),
//   created_at: varchar("created_at", { length: 256 })
// });