import type { NextRequest, NextFetchEvent } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (req.ua?.isBot) {
    return new Response("Plz don't be a bot. Be human.", { status: 403 });
  }
  /* if (!req.url.includes("/api")) {
    if (!req.url.includes("/enter") && !req.cookies.carrotsession) {
      NextResponse.next();
      req.nextUrl.pathname = "/enter";
      return NextResponse.redirect(req.nextUrl);
    }
  } */

  // console.log(req.geo); 유저의 위치 알 수 있음
}
