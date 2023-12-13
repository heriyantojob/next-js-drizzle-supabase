import { NextResponse,NextRequest } from "next/server";
import userGetApi from "./userListGetApi"
import userPostApi from "./userPostApi"

const { json: jsonResponse } = NextResponse;
export async function GET(request: Request,) {
  return userGetApi(request)
}

export async function POST(request: NextRequest ,response: NextResponse) {

  return userPostApi(request,response)
}
 
// export async function HEAD(request: Request) {}
 
// export async function POST(request: Request) {}
 
// export async function PUT(request: Request) {}
 
// export async function DELETE(request: Request) {}
 
// export async function PATCH(request: Request) {}