// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Subpath for GitHub Project Pages (thebrobot.github.io/Floyds_plumbing/).
// Set BASE_PATH in CI; omit or use "/" when serving from a custom domain at repo root.
const base = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site: 'https://floydsplumbing.com',
  base,
  output: 'static',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});