import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styles';

export const Button = ({ children, backgroundColor, Color, Width, Height }) => {
  return (
    <>
      <S.Button
        Color={Color}
        Width={Width}
        Height={Height}
        backgroundColor={backgroundColor}
      >
        {children}
      </S.Button>
    </>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  backgroundColor: PropTypes.string,
  Color: PropTypes.string,
  Width: PropTypes.string,
  Height: PropTypes.string,
};
