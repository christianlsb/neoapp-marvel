import React from 'react';

import { Header, CartComponent } from '../../components';
import * as S from './styles';
export const Cart = () => {
  return (
    <>
      <S.Container>
        <Header />
        <CartComponent />
      </S.Container>
    </>
  );
};
