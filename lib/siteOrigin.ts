import { company } from "./content";

// Where this build is actually served from.
//
// `company.siteUrl` is the canonical domain, but eliteprocessingteam.com still
// serves the previous site. Metadata generated against it advertises an OG
// image at a URL that 404s, so link previews (iMessage, Slack, etc.) fall back
// to scraping the page and pick whatever raster image they find — the founder
// photo — instead of the card we generate.
//
// Prefer an explicit override, then Vercel's stable production domain, then the
// canonical domain. Once eliteprocessingteam.com points at this deployment, set
// NEXT_PUBLIC_SITE_URL to it and this returns to the canonical host.
export const siteOrigin =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : company.siteUrl);
