"use server";

import { createSupbaseServerClient } from "./supabase";
import { redirect } from "next/navigation";

export async function logout() {
	const supabase = await createSupbaseServerClient();
	await supabase.auth.signOut();
	redirect("/");
}