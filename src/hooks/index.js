import PropTypes from 'prop-types';
import React from 'react';

import { CartProvider } from './CartContext';
const AppProvider = ({ children }) => <CartProvider>{children}</CartProvider>;

export default AppProvider;

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
