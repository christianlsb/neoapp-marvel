import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styles';
export const Title = ({
  children,
  fontSize,
  marginBottom,
  marginTop,
  fontWeight,
  color,
}) => {
  return (
    <>
      <S.Title
        marginBottom={marginBottom}
        color={color}
        fontWeight={fontWeight}
        fontSize={fontSize}
        marginTop={marginTop}
      >
        {children}
      </S.Title>
    </>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  color: PropTypes.string,
  marginBottom: PropTypes.string,
  marginTop: PropTypes.string,
};
