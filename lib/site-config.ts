/**
 * Checkout / payment configuration.
 *
 * Payments are processed through Whop. The operational checkout domain is set
 * via NEXT_PUBLIC_CHECKOUT_URL so it can change without code edits (e.g. to a
 * branded checkout subdomain or a Whop-hosted product URL). The default is the
 * current operational domain.
 */
export const CHECKOUT_PROVIDER = "Whop";
export const CHECKOUT_DOMAIN = "checkout-atroyale.com";
export const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_URL || "https://checkout-atroyale.com";

/** Build a per-plan checkout link (distinguishes tiers via ?plan=). */
export function checkoutUrlFor(planSlug: string): string {
  const sep = CHECKOUT_URL.includes("?") ? "&" : "?";
  return `${CHECKOUT_URL}${sep}plan=${encodeURIComponent(planSlug)}`;
}

/** One-line payment disclosure used across the funnel + legal-adjacent copy. */
export const CHECKOUT_DISCLOSURE = `Payments are processed securely through ${CHECKOUT_PROVIDER} via ${CHECKOUT_DOMAIN}.`;
