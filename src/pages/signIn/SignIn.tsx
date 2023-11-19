import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './SignIn.styles';
import { KAKAO_AUTH_URI } from '../../apis/kakaoAuthApi/kakaoAuthApi';
import { handleKakaoLogin } from '../../apis/kakaoAuthApi/kakaoAuthApi';
import kakaoLogo from '../../assets/images/Kakao Login3.png';
import googleLogo from "../../assets/images/Google Login.png";
import prame from "../../assets/images/Frame 3933.png";
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { submitLogin, submitLogout, refreshAccessToken, setAuthenticated } from './signinSlice'; // import signinSlice from './signinSlice';

const SignIn = () => {
    const dispatch: AppDispatch = useDispatch(); // AppDispatch 타입을 사용합니다.
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
    const isRefreshingToken = useSelector((state: RootState) => state.auth.isRefreshingToken);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginFailed, setIsLoginFailed] = useState(false);
    
    const handleLogin = async () => {
      try {
        // 이메일과 비밀번호가 비어있는지 체크
        if (!email || !password) {
          alert('이메일과 비밀번호를 입력해주세요.');
          return; // 입력값이 비어있다면 로그인 시도를 중단
        }
    
        const response = await dispatch(submitLogin({ email, password }));
        console.log('Response:', response);
    
        if (response.payload) {
          dispatch(setAuthenticated(true));
          navigate('/'); // 로그인 성공 시 메인 페이지로 이동
        } else {
          console.log('Login failed:', response);
          setIsLoginFailed(true); // 로그인 실패 시 실패 상태 설정
          // alert('로그인에 실패했습니다.'); // 사용자에게 실패 알림 (선택적)
          // 여기서 추가적인 처리 (예: 페이지 이동 없음)
        }
      } catch (error) {
        console.error('Error during login', error);
        alert('로그인 중 오류가 발생했습니다.'); // 오류 발생 알림
      }
    };
    
    // 페이지 이동 조건부 처리
    useEffect(() => {
      if (isLoginFailed) {
        setIsLoginFailed(false); // 실패 상태 초기화
        navigate('/login'); // 로그인 실패 시 로그인 페이지로 이동
      }
    }, [isLoginFailed]);
    const handleLogout = async () => {
        try {
            await dispatch(submitLogout());
            dispatch(setAuthenticated(false));
            navigate('/login');
        } catch (error) {
            console.error('Error during logout', error);
        }
    };

    const handleReissueAccessToken = async () => {
        try {
            await dispatch(refreshAccessToken()); // 액세스 토큰 재발급 액션 디스패치

            // 액세스 토큰 재발급 후의 추가 동작 수행 
        } catch (error) {
            console.error('Error during token reissue', error);
        }
    };

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
    
    useEffect(() => {
        handleKakaoRedirect();
    }, []);

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