// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://poolservicesspringtx.com',
  integrations: [sitemap()],
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
