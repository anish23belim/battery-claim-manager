import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/lib/session";

export async function proxy(request: NextRequest) {
  const isLoginPage = request.nextUrl.pathname.startsWith("/login");
  const session = request.cookies.get("session")?.value;

  // Protect all routes except /login
  if (!session && !isLoginPage) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Redirect to dashboard if logged in and trying to access /login
  if (session && isLoginPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Extend session if active
  if (session) {
    return await updateSession(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
