import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

export default defineConfig({
  integrations: [tailwind(), react(), mdx()],
  output: "hybrid",
  adapter: vercel(),
  renderers: ['@astrojs/renderer-react']
});