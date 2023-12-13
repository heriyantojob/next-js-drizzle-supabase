import { NextResponse,NextRequest } from "next/server";
import postsListApi from "./postsListApi"
import postsInsertApi from "./postsInsertApi"

const { json: jsonResponse } = NextResponse;
export async function GET(request: Request,) {
  return postsListApi(request)
}

export async function POST(request: NextRequest ,response: NextResponse) {

  return postsInsertApi(request,response)
}
 
// export async function HEAD(request: Request) {}
 
// export async function POST(request: Request) {}
 
// export async function PUT(request: Request) {}
 
// export async function DELETE(request: Request) {}
 
// export async function PATCH(request: Request) {}