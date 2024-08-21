import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        devSourcemap: true,
        preprocessorOptions: {
            scss: {
                additionalData: `
						@import "./src/sass/variables";
						@import "./src/sass/mixins";
						@import "./src/sass/placeholders";
					`,
            },
        },
    },
    server: {
        host: true,
        port: 3000,
    },
    resolve: {
        alias: {
            '@public': path.resolve(__dirname, 'public'),
            '@src': path.resolve(__dirname, 'src'),
            '@components': path.resolve(__dirname, 'src', 'components'),
            '@constants': path.resolve(__dirname, 'src', 'constants'),
            '@types': path.resolve(__dirname, 'src', 'types'),
            '@assets': path.resolve(__dirname, 'src', 'assets'),
        },
    },
});
