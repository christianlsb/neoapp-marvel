import React from 'react';
import { Link } from 'react-router-dom';

import { ButtonComponent, Header } from '../../components';
import * as S from './styles';
export const Home = () => {
  return (
    <>
      <Header />
      <S.Container>
        <Link to={'/comics'}>
          <ButtonComponent
            backgroundColor={'rgb(58, 186, 238)'}
            Width={'180px'}
            Height={'54px'}
            Color={'white'}
          >
            Acessar os Quadrinhos
          </ButtonComponent>
        </Link>
      </S.Container>
    </>
  );
};
