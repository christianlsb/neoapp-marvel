import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import { ButtonComponent, Title } from '../../components';
import { useCart } from '../../hooks/CartContext';
import { getComicById } from '../../services/apiById';
import * as S from './styles';

export const Comic = () => {
  const { AddComicInCart } = useCart();
  const { id } = useParams();
  const [comic, setComic] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadComic = async () => {
      const comic = await getComicById(id);
      setComic(comic);
      setLoading(false);
    };

    loadComic();
  }, [id]);
  const loaderCss = css`
    display: block;
    margin: 0 auto;
  `;
  return (
    <>
      {loading ? (
        <S.LoaderContainer>
          <ClipLoader
            color={'#3abaee'}
            loading={loading}
            css={loaderCss}
            size={100}
          />
        </S.LoaderContainer>
      ) : (
        <S.Container>
          <S.ContainerHq>
            <div className="displayPhone">
              <Title color={'#3abaee'} fontSize={'16px'}>
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
                backgroundColor={'rgb(58, 186, 238)'}
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
                <Title color={'#3abaee'} fontSize={'1.3em'}>
                  {comic.title}
                </Title>
                {comic.description ? (
                  <S.Description>{comic.description}</S.Description>
                ) : (
                  <p>Descrição não foi encontrada.</p>
                )}
                <ButtonComponent
                  backgroundColor={'rgb(58, 186, 238)'}
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
      )}
    </>
  );
};
