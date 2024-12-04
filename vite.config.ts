import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path'
const root = resolve(__dirname, "src")

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			"$lib": resolve(root, "$lib")
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
