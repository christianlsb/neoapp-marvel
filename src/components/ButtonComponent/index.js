import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styles';

export const ButtonComponent = ({
  children,
  backgroundColor,
  Color,
  Width,
  Height,
  ...rest
}) => {
  return (
    <>
      <S.Button
        {...rest}
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

ButtonComponent.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  Color: PropTypes.string,
  Width: PropTypes.string,
  Height: PropTypes.string,
};
