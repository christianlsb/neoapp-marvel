import PropTypes from 'prop-types';
import React from 'react';

export const Title = ({ children }) => {
  return (
    <>
      <h1>{children}</h1>
    </>
  );
};

Title.propTypes = {
  children: PropTypes.string,
};
