import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { SESSION_COOKIE, getSessionSecret, verifySession } from "@/lib/session";
import { getOnboarding, saveOnboarding } from "@/lib/portal-store";

/**
 * Authenticated client onboarding/intake.
 * GET  → the member's saved intake (server is the source of truth).
 * POST → merge/save answers, current step, and completion flag.
 *
 * Swap `getOnboarding`/`saveOnboarding` (lib/portal-store) for DB / CRM calls.
 */
async function currentMember() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  return verifySession(token, getSessionSecret());
}

export async function GET() {
  const member = await currentMember();
  if (!member) {
    return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
  }
  const record = getOnboarding(member.email);
  return NextResponse.json({
    answers: record?.answers ?? {},
    step: record?.step ?? 0,
    complete: record?.complete ?? false,
  });
}

export async function POST(request: Request) {
  const member = await currentMember();
  if (!member) {
    return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
  }

  let body: { answers?: Record<string, string>; step?: number; complete?: boolean };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const record = saveOnboarding(member.email, {
    answers: body.answers,
    step: body.step,
    complete: body.complete,
  });

  console.log("[portal] onboarding saved", {
    member: member.email,
    step: record.step,
    complete: record.complete,
  });

  return NextResponse.json({ ok: true, ...record });
}
