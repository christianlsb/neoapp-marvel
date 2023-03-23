import React from 'react';

import { Header } from '../../components';
import { Comics } from '../../components/Comics';
import * as S from './styles';

export const HomeComics = () => {
  return (
    <>
      <S.Container>
        <Header />
        <Comics />
      </S.Container>
    </>
  );
};
