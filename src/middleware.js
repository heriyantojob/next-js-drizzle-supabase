

// import { getToken } from "next-auth/jwt";
import { headers } from 'next/headers'
import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'
import { readUserSession } from "@/lib/auth/session";

export async function middleware(req) {
  const supabase = createClient(process.env.SUPABASE_API_URL, process.env.SUPABASE_ANON_KEY)
  const res = NextResponse.next()
  //check protect  dashboard
  const { data: userSession } = await readUserSession();
  if(req.nextUrl.pathname.startsWith('/dashboard')){
   
    if (!userSession.session) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  //check protect  api
  const path = req.nextUrl.pathname;
  const isApiUrl = path.includes("/api");
  if (isApiUrl) {
     //https://supabase.com/docs/reference/javascript/auth-getuser?example=get-the-logged-in-user-with-a-custom-access-token-jwt

    const headersInstance = headers()
    const authorizationHeader = headersInstance.get('authorization')
    if (authorizationHeader && authorizationHeader.startsWith('Bearer ')) {
      // Extract the token by removing the "Bearer " prefix
      const jwtAuthorization = authorizationHeader.slice(7);
      const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
      const { data: { user } } = await supabase.auth.getUser(jwtAuthorization)
      if(!user){
        return NextResponse.json({ message: 'Auth required' }, { status: 401 })
      }
    } else {
   
      return NextResponse.json({ message: 'Invalid or missing Authorization header' }, { status: 401 })
    }
   

   

    //  return NextResponse.json({ message: 'Auth required' }, { status: 401 })
   
  }
 

  // if (url.includes("api")) {
  //   return NextResponse.redirect("localhost:3000", req.url);
  // }

  //return NextResponse.next();

  return res
  //return NextResponse.next()
}
 


  export const config = {
    matcher: ['/dashboard/:path*','/api/:path*']
  }