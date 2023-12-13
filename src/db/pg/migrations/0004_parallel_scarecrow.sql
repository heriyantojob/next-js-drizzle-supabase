ALTER TABLE "bos_profiles" DROP CONSTRAINT "bos_profiles_id_users_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bos_profiles" ADD CONSTRAINT "bos_profiles_id_users_id_fk" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
