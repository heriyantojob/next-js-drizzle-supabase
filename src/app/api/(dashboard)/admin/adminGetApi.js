import { NextResponse, NextRequest } from "next/server";
import { db } from "@/db/setup";
const { json: jsonResponse } = NextResponse;
import { admins } from "@/db/schema";

export default async function   adminGetApi (request) {
    const allUsers = await db.select().from(admins);
    return jsonResponse(
        {
          data: allUsers,
        },
        {
          status: 200, //server error status code
        }
      );

}