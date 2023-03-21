import React from 'react';

import { Header } from '../../components';
import { Comics } from '../../components/Comics';
import { Title } from '../../components/Title/styles';
import * as S from './styles';

export const Home = () => {
  return (
    <>
      <S.Container>
        <Header />
        <Title>HQs da Marvel</Title>
        <Comics />
      </S.Container>
    </>
  );
};
