import { NextResponse,NextRequest } from "next/server";
import userAuthGetJWT from "./userAuthGetJWT"
const { json: jsonResponse } = NextResponse;
export async function GET(request: Request,) {
  return userAuthGetJWT(request)
}


 
// export async function HEAD(request: Request) {}
 
// export async function POST(request: Request) {}
 
// export async function PUT(request: Request) {}
 
// export async function DELETE(request: Request) {}
 
// export async function PATCH(request: Request) {}