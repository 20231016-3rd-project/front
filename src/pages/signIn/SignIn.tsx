import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './SignIn.styles';
import { KAKAO_AUTH_URI } from '../../apis/kakaoAuthApi/kakaoAuthApi';
import { handleKakaoLogin } from '../../apis/kakaoAuthApi/kakaoAuthApi';
import kakaoLogo from '../../assets/images/Kakao Login3.png';
import googleLogo from "../../assets/images/Google Login.png";
import prame from "../../assets/images/Frame 3933.png";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { submitLogin, submitLogout, refreshAccessToken, setAuthenticated, setAdmin } from './signinSlice';

// 로그인 컴포넌트
const SignIn = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const isRefreshingToken = useSelector((state: RootState) => state.auth.isRefreshingToken);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginFailed, setIsLoginFailed] = useState(false);

    // 로그인 처리 함수
    const handleLogin = async () => {
        try {
          if (!email || !password) {
            alert('이메일과 비밀번호를 입력해주세요.');
            return;
          }
    
          const response = await dispatch(submitLogin({ email, password }));
    
          if (response.payload && !response.error) {
            if (response.payload.isAdmin) {
              
              navigate('/admin-dashboard'); // 관리자 대시보드?
            } else {
             
              navigate('/'); 
            }
          } else {
            // 로그인 실패 처리
            console.log('Login failed:', response.error);
            setIsLoginFailed(true);
            alert('로그인 실패: ' + response.error.message);
          }
        } catch (error) {
          console.error('Error during login', error);
          alert('로그인 중 오류가 발생했습니다: ' + error.message);
        }
    };

    // 로그인 실패 시 로그인 페이지로 이동
    useEffect(() => {
      if (isLoginFailed) {
        setIsLoginFailed(false); // 실패 상태 초기화
        navigate('/signin'); // 로그인 실패 시 로그인 페이지로 이동
      }
    }, [isLoginFailed]);

    // 로그아웃 처리 함수
    const handleLogout = async () => {
        try {
            await dispatch(submitLogout());
            dispatch(setAuthenticated(false));
            navigate('/signin');
        } catch (error) {
            console.error('Error during logout', error);
        }
    };

    // 액세스 토큰 재발급 처리 함수
    const handleReissueAccessToken = async () => {
        try {
            await dispatch(refreshAccessToken()); // 액세스 토큰 재발급 액션 디스패치

            // 액세스 토큰 재발급 후의 추가 동작 수행 
        } catch (error) {
            console.error('Error during token reissue', error);
        }
    };

    // 카카오 로그인 리다이렉트 처리 함수
    const handleKakaoRedirect = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');

        if (code) {
            try {
                await handleKakaoLogin(code);
                navigate('/');
            } catch (err) {
                console.error('Error during Kakao login', err);
            }
        }
    };

    // 카카오 로그인 리다이렉트 처리
    useEffect(() => {
        handleKakaoRedirect();
    }, []);

    // 렌더링
    return (
        <S.Container>
            <S.Box>
                <h1>Login</h1>
                <label htmlFor="email">이메일</label>
                <S.Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="이메일을 입력해주세요"
                    type="email"
                    disabled={isRefreshingToken} // 토큰 재발급 중 비활성화
                />

                <S.Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="패스워드를 입력해주세요"
                    type="password"
                    disabled={isRefreshingToken} // 토큰 재발급 중 비활성화
                />

                <S.Button onClick={handleLogin} disabled={isRefreshingToken}>Login</S.Button>

                <img src={prame} alt="----" />

                <a href={KAKAO_AUTH_URI}>
                    <img src={kakaoLogo} alt="카카오 로그인" />
                </a>

                <a href={KAKAO_AUTH_URI}>
                    <img src={googleLogo} alt="구글 로그인" />
                </a>
            </S.Box>
        </S.Container>
    );
};

export default SignIn;