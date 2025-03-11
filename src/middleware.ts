import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const apiKey = req.headers.get("X-Api-Key");

  if (apiKey !== process.env.API_KEY) {
    return NextResponse.json(
      {
        error: "Unauthorized",
      },
      { status: 401 }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*"],
};
