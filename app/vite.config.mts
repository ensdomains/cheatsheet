// vite.config.ts
import postcss from './postcss.config.cjs';
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

export default defineConfig({
    plugins: [
        svelte({
            // Enable auto preprocessing of TypeScript and other languages
            preprocess: sveltePreprocess(),
        }),
    ],
    css: {
        postcss
    }
});
