import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'styled-components';

import AppProvider from './hooks';
import RoutesApp from './router/routes';
import GlobalStyles from './styles/globalStyles';
import { themes } from './styles/theme';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ThemeProvider theme={themes}>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <RoutesApp />
        </AppProvider>
        <GlobalStyles />
        <ToastContainer />
      </QueryClientProvider>
    </ThemeProvider>
  </>
);
