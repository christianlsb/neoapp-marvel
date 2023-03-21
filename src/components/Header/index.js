import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

import { Title } from '../Title';
import * as S from './styles';
export const Header = () => {
  return (
    <>
      <S.Container>
        <Title fontWeight={'500'} color="white" fontSize={'14px'}>
          NeoApp - Comics
        </Title>
        <div className="cart">
          <IoCartOutline color="white" size={20} />
        </div>
      </S.Container>
    </>
  );
};
