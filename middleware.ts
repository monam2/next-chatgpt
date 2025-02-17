import { verify } from "@/actions/sessions";
import {
  AUTH_ROUTES,
  BASE_URL,
  PUBLIC_ROUTES,
} from "@/constants/routes";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isPublicRoute = PUBLIC_ROUTES.includes(pathname);

  const cookie = (await cookies()).get("session")?.value;
  const session = await verify(cookie);

  if (!isPublicRoute && !session) {
    return NextResponse.redirect(
      new URL(AUTH_ROUTES.LOGIN, request.nextUrl),
    );
  }

  if (isPublicRoute && session) {
    return NextResponse.redirect(
      new URL(BASE_URL, request.nextUrl),
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
