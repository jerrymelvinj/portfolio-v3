import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";

  // Enforce Canonical www Domain: If request arrives without www., 301-redirect to https://www.jerrymelvinj.com
  if (host === "jerrymelvinj.com") {
    const { pathname, search } = request.nextUrl;
    return NextResponse.redirect(`https://www.jerrymelvinj.com${pathname}${search}`, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, svgs, etc.)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
