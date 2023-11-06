import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/globalStyle';
import router from './router/Router';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './app/store'; // store 파일 경로를 정확하게 지정해야 합니다.

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}> {/* Redux Store를 제공 */}
      <GlobalStyle />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);