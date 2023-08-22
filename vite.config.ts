import path from 'path';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import ssl from '@vitejs/plugin-basic-ssl';
import eslint from 'vite-plugin-eslint';
import stylelint from 'vite-plugin-stylelint';

import EslintFormatterPretty from 'eslint-formatter-pretty';
import StylelintFormatterPretty from 'stylelint-formatter-pretty';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    plugins: [
      vue(),
      ssl(),
      eslint({ formatter: EslintFormatterPretty }),
      stylelint({ formatter: StylelintFormatterPretty }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      hmr: {
        overlay: false,
      },
      proxy: {
        '/api': {
          target: process.env.PROXY || '/',
          changeOrigin: true,
        },
      },
    },
  };
});
