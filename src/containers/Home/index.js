import React from 'react';
import { Link } from 'react-router-dom';

import { ButtonComponent, Header } from '../../components';
import { themes } from '../../styles/theme';
import * as S from './styles';
export const Home = () => {
  return (
    <>
      <Header />
      <S.Container>
        <Link to={'/comics'}>
          <ButtonComponent
            backgroundColor={themes.colors.default_color}
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
