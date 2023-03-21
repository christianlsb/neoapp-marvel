import React from 'react';
import ReactDOM from 'react-dom/client';

import RoutesApp from './router/routes';
import GlobalStyles from './styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RoutesApp />
    <GlobalStyles />
  </>
);
