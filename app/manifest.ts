import type { MetadataRoute } from "next";
import { siteName } from "@/siteidentity";
import { SITE_OG_IMAGE, SITE_URL } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteName} — Global Education Consultancy`,
    short_name: siteName,
    description:
      "MBBS, NEET-PG, B.Tech and study-abroad counselling with expert college admission guidance.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0d1f3c",
    lang: "en-IN",
    categories: ["education", "business"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/logo.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [
      {
        src: `${SITE_URL}${SITE_OG_IMAGE}`,
        sizes: "1200x630",
        type: "image/png",
        form_factor: "wide",
        label: `${siteName} homepage`,
      },
    ],
  };
}
