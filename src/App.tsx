import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthenticated, tokenExpired } from './store/slices/authSlice';
import router from './router/Router';
import axios from 'axios'; 

function App() {
  const dispatch = useDispatch();
  const isTokenExpired = useSelector(state => state.auth.isTokenExpired); // 토큰 만료 상태를 가져옵니다.

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken && !isTokenExpired) {
      // 토큰이 있고 만료되지 않았다면, 로그인 상태를 true로 설정합니다.
      dispatch(setAuthenticated(true));
    } else if (accessToken && isTokenExpired) {
      // 토큰이 있지만 만료되었다면, 새 토큰을 요청합니다.
      axios.post('/auth/refresh')
        .then(response => {
          if (response.data.accessToken) {
            localStorage.setItem('accessToken', response.data.accessToken);
            dispatch(setAuthenticated(true));
            dispatch(tokenExpired(false)); // 토큰 만료 상태를 false로 설정합니다.
          } else {
            dispatch(setAuthenticated(false));
          }
        });
    }
  }, [dispatch, isTokenExpired]);

  return router;
}

export default App;
