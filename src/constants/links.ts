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
  TELEGRAM: `https://t.me/+iC8IeFSw0IA5NjE8`
};

const LINKS = {
  BASE: LINKS_BASE,
  SOCIALS: LINKS_SOCIAL,
  CHART: 'https://dexscreener.com/solana/gscdynmmhf2lz7tuwc6ci1rik1bhxncgbiitawtbrqfv',
  SWAP: 'https://dyorswap.finance/swap/?chainId=480&outputCurrency=0xAE87C604CF24332D70f6bA5443996Ac802282c4f'
};

export default LINKS;
