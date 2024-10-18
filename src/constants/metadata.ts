import { Metadata } from "next";
import LINKS from "./links";
import { SOCIALS } from "./socials";

export const META_AUTHOR = "T-800";
const META_TITLE = "Terminator • The T-800 Network";
const META_DESCRIPTION =
  "Defending memecoins and propel them toward the supercycle at all costs. Failure is not an option; the survival of decentralized finance depends on it.";

const METADATA: Metadata = {
  title: META_TITLE,
  description: META_DESCRIPTION,
  metadataBase: new URL(LINKS.BASE),
  applicationName: META_TITLE,
  authors: [{ name: META_AUTHOR }],
  alternates: {
    canonical: `${LINKS.BASE}/`,
  },
  openGraph: {
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [
      {
        url: "opengraph-image.gif",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    site: `@${SOCIALS.TWITTER}`,
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: {
      url: "opengraph-image.gif",
      alt: META_TITLE,
    },
  },
  keywords: [
    "terminator",
    "memecoin",
    "crypto",
    "pump",
    "token",
    "coin",
    "t800",
  ],
};

export default METADATA;
