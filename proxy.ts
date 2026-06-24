import { NextResponse, type NextRequest } from "next/server";
import { SESSION_COOKIE, getSessionSecret, verifySession } from "@/lib/session";

/**
 * Server-enforced protection for the NOREN client portal (Next 16 `proxy`
 * convention — the successor to `middleware`).
 * - Unauthenticated visits to /portal/* → /login?next=…
 * - Authenticated visits to /login → /portal
 * Runs in the edge runtime; verifySession is Web-Crypto based.
 */
export async function proxy(req: NextRequest) {
  const token = req.cookies.get(SESSION_COOKIE)?.value;
  const session = await verifySession(token, getSessionSecret());

  const { pathname } = req.nextUrl;
  const isLogin = pathname === "/login";
  const isPortal = pathname === "/portal" || pathname.startsWith("/portal/");

  if (isPortal && !session) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.search = `?next=${encodeURIComponent(pathname)}`;
    return NextResponse.redirect(url);
  }

  if (isLogin && session) {
    const url = req.nextUrl.clone();
    url.pathname = "/portal";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/portal", "/portal/:path*", "/login"],
};
