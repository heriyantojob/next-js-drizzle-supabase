import { NextResponse,NextRequest } from "next/server";
import adminGetApi from "./adminGetApi"
import adminPostApi from "./adminPostApi"

const { json: jsonResponse } = NextResponse;
export async function GET(request: Request,) {
  return adminGetApi(request)
}

export async function POST(request: NextRequest ,response: NextResponse) {

  return adminPostApi(request,response)
}
 
// export async function HEAD(request: Request) {}
 
// export async function POST(request: Request) {}
 
// export async function PUT(request: Request) {}
 
// export async function DELETE(request: Request) {}
 
// export async function PATCH(request: Request) {}