import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/globalStyle';
import router from './router/Router';
import { RouterProvider } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import store, { persistor } from './store/store';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';
import { PersistGate } from 'redux-persist/integration/react'; 

// QueryClient 인스턴스를 생성합니다.
const queryClient = new QueryClient();

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

// createRoot를 사용하여 React 앱의 루트를 생성합니다.
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <GlobalStyle />
      {/* QueryClientProvider로 앱을 감싸고 QueryClient를 제공합니다. */}
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
        </PersistGate>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
