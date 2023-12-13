import { NextResponse, NextRequest } from "next/server";
import { db } from "@/db/setup";
const { json: jsonResponse } = NextResponse;
import { posts } from "@/db/schema";

export default async function   postsListApi (request) {
    const allPosts = await db.select().from(posts);
    return jsonResponse(
        {
          data: allPosts,
        },
        {
          status: 200, //server error status code
        }
      );

}