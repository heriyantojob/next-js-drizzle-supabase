import { NextResponse, NextRequest } from "next/server";
import { db } from "@/db/setup";
const { json: jsonResponse } = NextResponse;
import { eq } from "drizzle-orm";
import { createClient } from '@supabase/supabase-js'
import { profiles, userFiles } from "@/db/schema";
import { authUsers } from "@/db/scehmaAuth";
export default async function   adminGetApi (request) {

   // const allUsers = await db.select().from(users);
    // const allUsers = await db.select().from(authUsers)
    //   .leftJoin(profiles, eq(authUsers.id, profiles.id));
      const allUsers = await db.select().from(authUsers)
    return jsonResponse(
        {
          data: allUsers,
        },
        {
          status: 200, //server error status code
        }
      );

}