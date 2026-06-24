import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// Site-wide social preview image. Renders the official NOREN logo on the brand
// black so links shared on social/messaging show real branding (not a blank card).
export const alt = "NOREN — Strategic Growth & Audience Infrastructure";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public", "noren-logo-white.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#050508",
          backgroundImage:
            "radial-gradient(60% 60% at 50% 0%, rgba(147,168,199,0.14), transparent 70%)",
        }}
      >
        <img
          src={logoSrc}
          width={520}
          height={139}
          style={{ objectFit: "contain" }}
          alt="NOREN"
        />
        <div
          style={{
            marginTop: 52,
            color: "rgba(255,255,255,0.62)",
            fontSize: 28,
            letterSpacing: 10,
            textTransform: "uppercase",
          }}
        >
          Strategic Growth &amp; Audience Infrastructure
        </div>
        <div
          style={{
            marginTop: 40,
            height: 2,
            width: 80,
            background: "#93a8c7",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
