import { NextResponse, NextRequest } from "next/server";
import { db } from "@/db/setup";
const { json: jsonResponse } = NextResponse;

import {  posts } from "@/db/schema";

export default async function   postsInsertApi (request,response) {
    // const allUsers = await db.select().from(users);
    // const formData = await request.formData();
    try {
      const { content } = await request.json();
      await db.insert(posts).values({ content });
  
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
     