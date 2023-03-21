import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styles';
export const Title = ({ children, fontSize, fontWeight, color }) => {
  return (
    <>
      <S.Title color={color} fontWeight={fontWeight} fontSize={fontSize}>
        {children}
      </S.Title>
    </>
  );
};

Title.propTypes = {
  children: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  color: PropTypes.string,
};
