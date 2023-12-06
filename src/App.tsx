import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setAuthenticated } from './store/slices/authSlice';
import router from '../src/router/Router';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) {
      dispatch(setAuthenticated(true));
    }
  }, [dispatch]);

  return router
}

export default App;
