CREATE TABLE IF NOT EXISTS "bos_admin_roles" (
	"id_admin" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"status" smallint,
	"created_at" timestamp,
	"updated_at" timestamp,
	"deleted_at" timestamp
);
