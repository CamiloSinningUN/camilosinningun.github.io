import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@fonts': path.resolve(__dirname, './src/assets/fonts'),
			'@images': path.resolve(__dirname, './src/assets/images'),
			'@styles': path.resolve(__dirname, './src/assets/styles'),
			'@icons': path.resolve(__dirname, './src/assets/icons'),
			'@hooks': path.resolve(__dirname, './src/core/hooks'),
			'@utils': path.resolve(__dirname, './src/core/utils'),
			'@locales': path.resolve(__dirname, './src/locales'),
			'@sections': path.resolve(__dirname, './src/sections'),
			'@components': path.resolve(__dirname, './src/shared/components'),
			'@contexts': path.resolve(__dirname, './src/core/contexts')
		}
	}
});
