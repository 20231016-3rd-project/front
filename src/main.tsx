import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/globalStyle';
import router from './router/Router';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import store, { persistor } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; 
import { ChakraProvider } from '@chakra-ui/react';

const queryClient = new QueryClient();
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <GlobalStyle />
  
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