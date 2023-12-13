import { NextResponse, NextRequest } from "next/server";
import { db } from "@/db/setup";
const { json: jsonResponse } = NextResponse;

import { users } from "@/db/schema";
export default async function   adminPostApi (request,response) {
    // const allUsers = await db.select().from(users);
    // const formData = await request.formData();
    try {
      const { name,email } = await request.json();
      await db.insert(users).values({ name,email });
  
      return jsonResponse(
        {
          data:     "berhasil di insert",
        },
        {
          status: 200, //server error status code
        }
      );
    }
     catch (error) {
        return jsonResponse(
          {
            message: "Server Error",
          },
          {
            status: 500, //server error status code
          }
        );
    }   
  }
     