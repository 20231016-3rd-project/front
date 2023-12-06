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
import { submitLogin, submitLogout, refreshAccessToken, } from '../../store/slices/authSlice'; 

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
    
        const response = await dispatch(submitLogin({ email, password }));
    
        if (response.payload) {
          const isAdmin = email === 'admin@sunflowerplate.com' && password === 'admin1234'; 
          
          if (isAdmin) {
            navigate('/'); // 관리자 페이지로 이동
          } else {
            navigate('/'); 
          }
        } 
      } catch (error : any ) {
        console.log('Login failed:', error);
        setIsLoginFailed(true);
        alert('로그인 실패: ' + error.message);
      }
    };
    
    
    useEffect(() => {
      if (isLoginFailed) {
        setIsLoginFailed(false); // 실패 상태 초기화
        navigate('/signin'); 
      }
    }, [isLoginFailed]);



    const handleLogout = async () => {
      dispatch(submitLogout())
        .unwrap()
        .then(() => {
          
          navigate('/');
        })
        .catch((error) => {
          // 로그아웃 실패 시
          console.error('Error during logout', error);
        });
    };




    const handleReissueAccessToken = async () => {
        try {
            await dispatch(refreshAccessToken()); 

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
                    disabled={isRefreshingToken} 
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