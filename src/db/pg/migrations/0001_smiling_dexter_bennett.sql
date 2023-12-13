ALTER TABLE "bos_profiles" RENAME TO "bos_profilesprofiles";--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "bos_profilesprofiles" ADD CONSTRAINT "bos_profilesprofiles_id_users_id_fk" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
