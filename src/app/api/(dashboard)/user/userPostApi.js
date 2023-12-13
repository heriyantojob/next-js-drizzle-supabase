import { NextResponse, NextRequest } from "next/server";
import { db } from "@/db/setup";
import { createClient } from '@supabase/supabase-js'
const { json: jsonResponse } = NextResponse;

// import { users } from "@/db/schema";
export default async function   adminPostApi (request,response) {

    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
    try {
      const { email ,password} = await request.json();
      
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      })
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
            message: error,
          },
          {
            status: 500, //server error status code
          }
        );
    }   
  }
     