import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from './store/slices/authSlice';
import router from '../src/router/Router';
import axios  from 'axios';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      dispatch(setToken({ accessToken }));
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`; // axios 사용하는 경우
    }
  }, [dispatch]);

  return router;
}

export default App;