import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './SignIn.styles';
import { KAKAO_AUTH_URI } from '../../apis/kakaoAuthApi/kakaoAuthApi';
import { handleKakaoLogin } from '../../apis/kakaoAuthApi/kakaoAuthApi';
import kakaoLogo from '../../assets/images/Kakao Login6.png';
import googleLogo from "../../assets/images/Google Login.png";
import prame from "../../assets/images/Frame 3933.png";
import Video from "../../assets/images/yellowflower.mp4"
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { submitLogin, submitLogout, refreshAccessToken, setAuthenticated, setAdmin } from './signinSlice'; // import signinSlice from './signinSlice';

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
          if (!email || !password) {
            alert('이메일과 비밀번호를 입력해주세요.');
            return;
          }
      
          // 일반 사용자 로그인 처리
          const response = await dispatch(submitLogin({ email, password }));
      
          if (response.payload) {
            dispatch(setAuthenticated(true));
            navigate('/'); // 로그인 성공 시 메인 페이지로 이동
          } else {
            console.log('Login failed:', response);
            setIsLoginFailed(true); // 로그인 실패 시 실패 상태 설정
          }
        } catch (error) {
          console.error('Error during login', error);
          alert('로그인 중 오류가 발생했습니다.');
        }
      };
    // 페이지 이동 조건부 처리
    useEffect(() => {
      if (isLoginFailed) {
        setIsLoginFailed(false); // 실패 상태 초기화
        navigate('/signin'); // 로그인 실패 시 로그인 페이지로 이동
      }
    }, [isLoginFailed]);
    const handleLogout = async () => {
        try {
            await dispatch(submitLogout());
            dispatch(setAuthenticated(false));
            navigate('/signin');
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
        <S.MainContainer>
            <S.GridContainer>
            <S.VideoSection>
              <video autoPlay loop muted>
                 <source src={Video} type="video/mp4" />
              </video>

              <S.OverlayText>
              <h1>지금바로 떠나는 맛집 탐방!</h1>
               <p>해바라기 플레이트</p>
              </S.OverlayText>
            </S.VideoSection>

            <S.LoginSection>
              <S.Box>
                <h1>로그인</h1>
                <label htmlFor="email">이메일</label>
                <S.Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="이메일을 입력해주세요"
                    type="email"
                    disabled={isRefreshingToken} // 토큰 재발급 중 비활성화
                />
                <label htmlFor="password">비밀번호</label>
                <S.Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="패스워드를 입력해주세요"
                    type="password"
                    disabled={isRefreshingToken} // 토큰 재발급 중 비활성화
                />

                <S.AutoLoginBox>
                <S.CheckboxLabel>
                 <S.Checkbox />
                   자동로그인
                </S.CheckboxLabel>
                <S.PasswordRecoveryLink>아이디가 없으신가요?</S.PasswordRecoveryLink>

                </S.AutoLoginBox>

                <S.Button onClick={handleLogin} disabled={isRefreshingToken}>로그인</S.Button>

                <img src={prame} alt="----" />

                <a href={KAKAO_AUTH_URI}>
                    <img src={kakaoLogo} alt="카카오 로그인" />
                </a>

                <a href={KAKAO_AUTH_URI}>
                    <img src={googleLogo} alt="구글 로그인" />
                </a>
            </S.Box>
            </S.LoginSection>
            
            </S.GridContainer>
        </S.MainContainer>
    );
};

export default SignIn;