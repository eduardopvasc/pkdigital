import { NextResponse } from "next/server";
import { verifyCredentials } from "@/lib/portal-auth";
import { SESSION_COOKIE, getSessionSecret, signSession } from "@/lib/session";

type LoginBody = { email?: string; password?: string; remember?: boolean };

const EIGHT_HOURS = 60 * 60 * 8;
const THIRTY_DAYS = 60 * 60 * 24 * 30;

export async function POST(request: Request) {
  let body: LoginBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const identity = verifyCredentials(body.email || "", body.password || "");
  if (!identity) {
    // Deliberately vague — do not reveal which field was wrong.
    return NextResponse.json(
      { error: "Those credentials don’t match an active workspace." },
      { status: 401 },
    );
  }

  const remember = Boolean(body.remember);
  const maxAge = remember ? THIRTY_DAYS : EIGHT_HOURS;
  const token = await signSession(
    { email: identity.email, name: identity.name, exp: Date.now() + maxAge * 1000 },
    getSessionSecret(),
  );

  const res = NextResponse.json({ ok: true, name: identity.name });
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    // "Remember me" → persistent cookie; otherwise a session cookie.
    ...(remember ? { maxAge } : {}),
  });
  return res;
}
