import type { MetadataRoute } from "next";

const locales = ["en", "zh-HK"];
const routes = ["", "/today", "/this-week", "/all", "/search", "/guides", "/apply", "/account", "/account/saved", "/admin", "/food-drink", "/family-living", "/events-culture", "/wellness-services", "/listing/spring-market-weekend", "/listing/resident-wellness-pass", "/partner/market-hall", "/partner/seaside-studio", "/guides/how-to-plan-a-neighborhood-weekend"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `https://example.com/${locale}${route}`,
      lastModified: new Date()
    }))
  );
}
