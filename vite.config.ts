import { defineConfig, loadEnv } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      react(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            kakaoAppKey: env.VITE_APP_KAKAOMAP_API_KEY,
          },
        },
      }),
    ],
    resolve: {
      alias: [
        {
          find: '@images',
          replacement: path.resolve(__dirname, 'src/components/assets/images'),
        },
      ],
    },
  };
};
