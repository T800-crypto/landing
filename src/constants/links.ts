import { SOCIALS } from "./socials";

// production base url
const LINKS_BASE =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://t-800.xyz";

// social media links
const LINKS_SOCIAL = {
  TWITTER: `https://x.com/${SOCIALS.TWITTER}`,
  GITHUB: `https://github.com/${SOCIALS.GITHUB}`,
};

const LINKS = {
  BASE: LINKS_BASE,
  SOCIALS: LINKS_SOCIAL,
};

export default LINKS;
