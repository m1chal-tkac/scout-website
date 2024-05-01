import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import prefetch from "@astrojs/prefetch";
import { loadEnv } from "vite";

const site = loadEnv("", process.cwd(), "PUBLIC_").PUBLIC_URL;

export default defineConfig({
  site,
  server: {
    port: 3000,
  },
  integrations: [
    tailwind({ config: { applyBaseStyles: false } }),
    sitemap({
      serialize: (item) => {
        switch (item.url) {
          case site + "/":
          case site + "/kontakty/":
            item.changefreq = "monthly";
            item.priority = 1;
            break;
          case site + "/novinky/":
            item.changefreq = "weekly";
            item.priority = 0.9;
            break;
          default:
            if (item.url.startsWith(site + "/novinky/")) {
              item.changefreq = "yearly";
              item.priority = 0.6;
            } else if (
              item.url.substring(site.length + 1).split("/").length === 3
            ) {
              item.changefreq = "yearly";
              item.priority = 0.7;
            } else {
              item.changefreq = "monthly";
              item.priority = 0.8;
            }
            break;
        }
        return item;
      },
    }),
    react(),
    prefetch(),
  ],
});
