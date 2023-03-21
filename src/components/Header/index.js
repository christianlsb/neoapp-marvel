import React from 'react';

import { Title } from '../Title';
import * as S from './styles';

export const Header = () => {
  return (
    <>
      <S.Container>
        <Title fontWeight={'500'} color="white" fontSize={'14px'}>
          NeoApp
        </Title>
      </S.Container>
    </>
  );
};
