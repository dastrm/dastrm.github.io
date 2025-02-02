import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	css: {
        preprocessorOptions: {
			scss: {
				// TODO: deal with deprecations instead of hiding them
				silenceDeprecations: ["import", "color-functions", "mixed-decls", "global-builtin"],
			},
        },
    },
	plugins: [sveltekit()]
});
