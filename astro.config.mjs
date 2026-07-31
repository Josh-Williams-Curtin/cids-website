// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://josh-williams-curtin.github.io',
	base: '/cids-website',
	prefetch: {
		prefetchAll: true,
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
