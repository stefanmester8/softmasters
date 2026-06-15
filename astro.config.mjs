import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://softmasters.ro',
  integrations: [tailwind()],
  output: 'static',
});
