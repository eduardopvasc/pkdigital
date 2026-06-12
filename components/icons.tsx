/**
 * In-house monochrome line-icon set. Consistent 24px grid, 1.5 stroke,
 * currentColor — no external dependency, no official brand logos. Platform
 * glyphs are simplified, consistent line marks (not official assets).
 */

import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { className?: string };

function Svg({ className = "h-5 w-5", children, ...rest }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      {...rest}
    >
      {children}
    </svg>
  );
}

/* ---------------- UI / utility ---------------- */

export const IconArrowUpRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </Svg>
);

export const IconCheck = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12.5l4 4 10-10" />
  </Svg>
);

export const IconTarget = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
  </Svg>
);

export const IconLayers = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3l8.5 4.5L12 12 3.5 7.5 12 3z" />
    <path d="M4 12l8 4.5L20 12" />
    <path d="M4 16.5l8 4.5 8-4.5" />
  </Svg>
);

export const IconChat = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-5 4V6z" />
    <path d="M8 9h8" />
    <path d="M8 12h5" />
  </Svg>
);

export const IconTrendingUp = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 16l5-5 4 4 8-8" />
    <path d="M16 7h5v5" />
  </Svg>
);

export const IconBarChart = (p: IconProps) => (
  <Svg {...p}>
    <path d="M4 20h16" />
    <path d="M7 20v-5" />
    <path d="M12 20V8" />
    <path d="M17 20v-9" />
  </Svg>
);

export const IconSparkle = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3c.4 3.6 1.4 4.6 5 5-3.6.4-4.6 1.4-5 5-.4-3.6-1.4-4.6-5-5 3.6-.4 4.6-1.4 5-5z" />
  </Svg>
);

export const IconRoute = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="6" cy="18" r="2.2" />
    <circle cx="18" cy="6" r="2.2" />
    <path d="M8 16.4c3-1.2 4.6-2.8 5.4-5 .6-1.7 1.6-3 3.1-3.7" />
  </Svg>
);

export const IconDocument = (p: IconProps) => (
  <Svg {...p}>
    <path d="M7 3h7l5 5v13H7z" />
    <path d="M14 3v5h5" />
    <path d="M9.5 13h5" />
    <path d="M9.5 16.5h5" />
  </Svg>
);

export const IconCompass = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M14.7 9.3l-1.9 4.9-4.9 1.9 1.9-4.9 4.9-1.9z" />
  </Svg>
);

export const IconUserCheck = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="10" cy="8" r="3.5" />
    <path d="M4 20c0-3.3 2.7-6 6-6 1.1 0 2.1.3 3 .8" />
    <path d="M15.5 18l2 2 4-4" />
  </Svg>
);

export const IconCalendar = (p: IconProps) => (
  <Svg {...p}>
    <rect x="4" y="5" width="16" height="16" rx="2" />
    <path d="M4 9.5h16" />
    <path d="M8 3v4" />
    <path d="M16 3v4" />
  </Svg>
);

export const IconMapPin = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21c4.5-4.5 7-7.6 7-11a7 7 0 1 0-14 0c0 3.4 2.5 6.5 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </Svg>
);

export const IconMail = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M4 7.5l8 5.5 8-5.5" />
  </Svg>
);

export const IconClock = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </Svg>
);

/* ---------------- Platform glyphs (simplified line marks) ---------------- */

export const IconInstagram = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="16.8" cy="7.2" r="1" fill="currentColor" stroke="none" />
  </Svg>
);

export const IconTikTok = (p: IconProps) => (
  <Svg {...p}>
    <path d="M9.7 4v9.9a2.9 2.9 0 1 1-2.4-2.85" />
    <path d="M9.7 4c.5 2.1 2 3.5 4.5 3.7" />
  </Svg>
);

export const IconYouTube = (p: IconProps) => (
  <Svg {...p}>
    <rect x="2.5" y="6" width="19" height="12" rx="3.5" />
    <path d="M10.5 9.3l4.6 2.7-4.6 2.7z" fill="currentColor" stroke="none" />
  </Svg>
);

export const IconLinkedIn = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
    <path d="M8 10.6V16" />
    <circle cx="8" cy="7.7" r="0.95" fill="currentColor" stroke="none" />
    <path d="M11.6 16v-3.1a2.3 2.3 0 0 1 4.6 0V16" />
    <path d="M11.6 10.6V16" />
  </Svg>
);

export const IconFacebook = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M14.4 8.2h-1.5a1.8 1.8 0 0 0-1.8 1.8V18" />
    <path d="M9.8 13h4.2" />
  </Svg>
);

export const IconPinterest = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M10.6 18.4l1.3-5.6" />
    <path d="M9.7 11.4c0-1.8 1.5-3.1 3.4-3.1 1.8 0 3 1.2 3 2.9 0 2-1.2 3.6-2.9 3.6-.9 0-1.6-.7-1.4-1.6" />
  </Svg>
);

export const IconThreads = (p: IconProps) => (
  <Svg {...p}>
    <path d="M16.2 8.4c-1-1.5-2.5-2.2-4.2-2.2-3.1 0-5 2.4-5 5.8s1.9 5.8 5 5.8c1.8 0 3-.9 3.6-2.1.5-1.1.4-2.3-.4-3.1-.8-.8-2-1.1-3.2-1.1-1.4 0-2.3.7-2.3 1.8 0 .9.7 1.6 1.8 1.6 1.5 0 2.3-1.1 2.4-2.8" />
  </Svg>
);
