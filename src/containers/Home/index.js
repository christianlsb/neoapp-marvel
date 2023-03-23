import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Header, Carousel, Title } from '../../components';
import * as S from './styles';
export const Home = () => {
  return (
    <>
      <Header />
      <S.Container>
        <Title marginBottom={'15px'} marginTop={'15px'} color={'white'}>
          {' '}
          NeoApp Comics
        </Title>
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
