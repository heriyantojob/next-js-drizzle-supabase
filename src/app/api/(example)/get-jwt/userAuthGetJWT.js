import { NextResponse, NextRequest } from "next/server";
import { db } from "@/db/setup";
const { json: jsonResponse } = NextResponse;
import { headers } from 'next/headers'
import { createClient } from '@supabase/supabase-js'
import { userFiles } from "@/db/schema";
import { authUsers } from "@/db/scehmaAuth";
export default async function   adminGetApi (request) {
    const headersInstance = headers()
    const jwtAuthorization = headersInstance.get('authorization')
    const supabase = createClient(process.env.SUPABASE_API_URL, process.env.SUPABASE_ANON_KEY)
    const { data: { user } } = await supabase.auth.getUser(jwtAuthorization)
   // const allUsers = await db.select().from(users);

    return jsonResponse(
        {
          data: user,
        },
        {
          status: 200, //server error status code
        }
      );

}