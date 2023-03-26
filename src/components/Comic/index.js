import { css } from '@emotion/react';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import { ButtonComponent, Title } from '../../components';
import { useCart } from '../../hooks/CartContext';
import { getComicById } from '../../services/apiById';
import { themes } from '../../styles/theme';
import * as S from './styles';
export const Comic = () => {
  const { AddComicInCart } = useCart();
  const { id } = useParams();

  const {
    data: comic,
    isLoading,
    isError,
    error,
  } = useQuery(['comic', id], () => getComicById(id));

  const loaderCss = css`
    display: block;
    margin: 0 auto;
  `;

  if (isLoading) {
    return (
      <S.LoaderContainer>
        <ClipLoader
          color={themes.colors.default_color}
          loading={isLoading}
          css={loaderCss}
          size={100}
        />
      </S.LoaderContainer>
    );
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <S.Container>
      <S.ContainerHq>
        <div className="displayPhone">
          <Title color={themes.colors.default_color} fontSize={'16px'}>
            {comic.title}
          </Title>
          <S.Image
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={comic.title}
          />
          {comic.description ? (
            <S.Description>{comic.description}</S.Description>
          ) : (
            <p>Descrição não foi encontrada.</p>
          )}
          <ButtonComponent
            backgroundColor={themes.colors.default_color}
            Width={'180px'}
            Height={'32px'}
            Color={'white'}
            onClick={() => AddComicInCart(comic)}
          >
            Adicionar ao Carrinho
          </ButtonComponent>
        </div>

        <div className="displayPc">
          <S.Image
            className="image-hq"
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={comic.title}
          />
          <div className="divFlex">
            <Title color={themes.colors.default_color} fontSize={'1.3em'}>
              {comic.title}
            </Title>
            {comic.description ? (
              <S.Description>{comic.description}</S.Description>
            ) : (
              <p>Descrição não foi encontrada.</p>
            )}
            <ButtonComponent
              backgroundColor={themes.colors.default_color}
              Width={'180px'}
              Height={'32px'}
              Color={'white'}
              onClick={() => AddComicInCart(comic)}
            >
              Adicionar ao Carrinho
            </ButtonComponent>
          </div>
        </div>
      </S.ContainerHq>
    </S.Container>
  );
};
