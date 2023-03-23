import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Header, Footer, Carousel } from '../../components';
import * as S from './styles';
export const Home = () => {
  return (
    <>
      <Header />
      <S.Container>
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
        <Carousel />
        <Footer />
      </S.Container>
    </>
  );
};
