import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/globalStyle';
import router from './router/Router';
import { RouterProvider } from 'react-router-dom';

import { Provider } from "react-redux";
import store from './store/store';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <GlobalStyle />
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
