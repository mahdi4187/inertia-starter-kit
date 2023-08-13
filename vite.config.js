import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css', 'resources/js/app.js'
            ],
            refresh: true,
        }),
        vue(),
    ],
    css: {
        devSourcemap: true,
    },
    // Vite
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        return pages[`./Pages/${name}.vue`]
    },
});
