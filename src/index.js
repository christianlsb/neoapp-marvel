import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ToastContainer } from 'react-toastify';

import AppProvider from './hooks';
import RoutesApp from './router/routes';
import GlobalStyles from './styles/globalStyles';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <RoutesApp />
      </AppProvider>
      <GlobalStyles />
      <ToastContainer />
    </QueryClientProvider>
  </>
);
