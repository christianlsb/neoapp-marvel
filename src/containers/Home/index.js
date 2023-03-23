import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Header, Carousel } from '../../components';
import * as S from './styles';
export const Home = () => {
  return (
    <>
      <Header />
      <S.Container>
        <Carousel />
        <Link to={'/comics'}>
          <Button
            backgroundColor={'rgb(58, 186, 238)'}
            Width={'180px'}
            Height={'32px'}
            Color={'white'}
          >
            Acessar os Quadrinhos
          </Button>
        </Link>
      </S.Container>
    </>
  );
};
