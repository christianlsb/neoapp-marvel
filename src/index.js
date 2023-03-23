import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';

import AppProvider from './hooks';
import RoutesApp from './router/routes';
import GlobalStyles from './styles/globalStyles';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AppProvider>
      <RoutesApp />
    </AppProvider>
    <GlobalStyles />
    <ToastContainer />
  </>
);
