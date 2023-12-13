import { NextResponse, NextRequest } from "next/server";

const { json: jsonResponse } = NextResponse;
import { db } from "@/db/setup";
import { users } from "@/db/schema";
import { eq, lt, gte, ne } from 'drizzle-orm';
export default async function   userOneGetApi (request) {
    //const allUsers = await db.select().from(users).where(eq(users.email, "tes@gmail.com"));
    const allUsers = await db.select().from(users).where(eq(users.email, "tes@gmail.com"));
    //const allUsers =  db.query.bos_users.findFirst();
    return jsonResponse(
        {
          data: allUsers,
        },
        {
          status: 200, //server error status code
        }
      );

}