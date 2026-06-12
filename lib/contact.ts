/**
 * Single source of truth for the contact-form topics. Shared by the API route
 * (server-side validation), the /contact page, and the Home contact section so
 * the dropdown options and the server allow-list never drift apart.
 */
export const CONTACT_TOPICS = [
  "Growth Strategy",
  "Audience Development",
  "Content Infrastructure",
  "Strategic Distribution",
  "Brand Positioning",
  "Community Development",
  "Growth Intelligence",
  "Partnership / Other",
] as const;

export type ContactTopic = (typeof CONTACT_TOPICS)[number];
