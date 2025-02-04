import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	css: {
        preprocessorOptions: {
			scss: {
				// TODO: deal with deprecations instead of hiding them
				silenceDeprecations: ["mixed-decls"],
			},
        },
    },
	plugins: [sveltekit()]
});
