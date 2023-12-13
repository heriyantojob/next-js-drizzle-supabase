CREATE TABLE IF NOT EXISTS "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp,
	"content" varchar(256) NOT NULL,
	"user_id" varchar(256) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "bos_profiles" (
	"id" uuid PRIMARY KEY NOT NULL,
	"first_name " varchar(256),
	"last_name " varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_files" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp,
	"content" varchar(256) NOT NULL
);
