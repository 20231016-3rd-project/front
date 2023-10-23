import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/globalStyle';
import App from './App';
import router from './router/Router';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />

    <App />
  </React.StrictMode>
);
