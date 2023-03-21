import React from 'react';

import { Header } from '../../components';
import { Comics } from '../../components/Comics';
import * as S from './styles';

export const Home = () => {
  return (
    <>
      <S.Container>
        <Header />
        <S.TextNeoComics>
          NeoApp Comics é um site que combina qualidade de conteúdo, facilidade
          de uso e interação social, tornando-se o destino número um para todos
          os amantes de quadrinhos da Marvel ao redor do mundo.
        </S.TextNeoComics>
        <Comics />
      </S.Container>
    </>
  );
};
