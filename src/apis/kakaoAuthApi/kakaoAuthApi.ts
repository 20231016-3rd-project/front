import axios from 'axios';
  
const REST_API_KEY = import.meta.env.VITE_APP_REST_API_KEY;
const REDIRECT_URI =  'http://localhost:3002/kakao';

export const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`; 
// 백엔드 API 주소
const BACKEND_API = import.meta.env.VITE_APP_SERVER_API;

// 인증 코드를 백엔드로 전송하여 카카오 로그인을 처리하는 함수
export const handleKakaoLogin = async (code: string) => {
  try {
    const response = await axios.post(`${BACKEND_API}/kakao/login`, {
      code,
    });
  
    return response.data; 
  } catch (error) {
    throw new Error('Failed to login with Kakao');
  }
};