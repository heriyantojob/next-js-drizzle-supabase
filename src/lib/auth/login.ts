"use server";

import { createSupbaseServerClient } from "./supabase";


export async function loginWithEmailAndPassword(data: {
	email: string;
	password: string;
}) {
	const supabase = await createSupbaseServerClient();

	const result = await supabase.auth.signInWithPassword(data);
	return JSON.stringify(result);
}