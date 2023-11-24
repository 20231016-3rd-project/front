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
    server: {
      proxy: {
        '/api': {
          target: env.VITE_APP_SERVER_API, // 환경 변수에서 API 서버 주소 불러오기
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''), // '/api' 경로 제거
        },
      },
    },
  };
};