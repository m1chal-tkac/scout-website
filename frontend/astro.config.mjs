import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: "https://nashuro.cz",
  integrations: [
    tailwind({ config: { applyBaseStyles: false } }),
    sitemap(),
    react(),
    prefetch(),
  ],
});
