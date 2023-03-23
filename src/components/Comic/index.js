import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button, Title } from '../../components';
import { useCart } from '../../hooks/CartContext';
import { getComicById } from '../../services/apiById';
import * as S from './styles';

export const Comic = () => {
  const { AddComicInCart } = useCart();
  const { id } = useParams();
  const [comic, setComic] = useState(null);

  useEffect(() => {
    const loadComic = async () => {
      const comic = await getComicById(id);
      setComic(comic);
    };

    loadComic();
  }, [id]);

  return (
    <>
      {comic ? (
        <S.Container>
          <S.ContainerHq>
            <div className="displayPhone">
              <Title fontSize={'16px'}>{comic.title}</Title>
              <S.Image
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
              />
              {comic.description ? (
                <S.Description>{comic.description}</S.Description>
              ) : (
                <p>Descrição não foi encontrada.</p>
              )}
              <Button
                backgroundColor={'rgb(58, 186, 238)'}
                Width={'180px'}
                Height={'32px'}
                Color={'white'}
                onClick={() => AddComicInCart(comic)}
              >
                Adicionar ao Carrinho
              </Button>
            </div>

            <div className="displayPc">
              <S.Image
                className="image-hq"
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
              />
              <div className="divFlex">
                <Title fontSize={'1.3em'}>{comic.title}</Title>
                {comic.description ? (
                  <S.Description>{comic.description}</S.Description>
                ) : (
                  <p>Descrição não foi encontrada.</p>
                )}
                <Button
                  backgroundColor={'rgb(58, 186, 238)'}
                  Width={'180px'}
                  Height={'32px'}
                  Color={'white'}
                  onClick={() => AddComicInCart(comic)}
                >
                  Adicionar ao Carrinho
                </Button>
              </div>
            </div>
          </S.ContainerHq>
        </S.Container>
      ) : (
        <p>Carregando Hq...</p>
      )}
    </>
  );
};
