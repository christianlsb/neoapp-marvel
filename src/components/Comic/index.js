import axios from 'axios';
import md5 from 'md5';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Button, Title } from '../../components';
import * as S from './styles';
const publicKey = 'b00c558ed1d9824a6aa4c9511f831763';
const privateKey = '4029a0c699e40af7dbe0685b39f3cef2367276fe';
const apiUrl = 'https://gateway.marvel.com/v1/public/comics';

export const Comic = () => {
  const { id } = useParams();
  const [comic, setComic] = useState(null);
  const [cart, setCart] = useState([]);
  const addComicInCart = comic => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const comicAlreadyInCart = storedCart.find(item => item.id === comic.id);
    if (comicAlreadyInCart) {
      console.log('Essa comic já foi adicionada');
    } else {
      const updatedCart = [...storedCart, comic];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  console.log(cart);
  useEffect(() => {
    const timestamp = Date.now().toString();
    const hash = md5(`${timestamp}${privateKey}${publicKey}`);

    axios
      .get(`${apiUrl}/${id}`, {
        params: {
          apikey: publicKey,
          ts: timestamp,
          hash,
        },
      })
      .then(response => {
        setComic(response.data.data.results[0]);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);
  console.log(comic);
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
                onClick={() => addComicInCart(comic)}
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
                  onClick={() => addComicInCart(comic)}
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
