import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://enodrac.github.io/kuepa-landing-astro/',
  base: 'kuepa-landing-astro',
  integrations: [react()],
  build: {
    minify: true,
  },
});
