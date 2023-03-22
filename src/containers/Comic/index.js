import axios from 'axios';
import md5 from 'md5';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Header, Title } from '../../components';
import * as S from './styles';
const publicKey = 'b00c558ed1d9824a6aa4c9511f831763';
const privateKey = '4029a0c699e40af7dbe0685b39f3cef2367276fe';
const apiUrl = 'https://gateway.marvel.com/v1/public/comics';

export const Comic = () => {
  const { id } = useParams();
  const [comic, setComic] = useState(null);

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
          <Header />
          <Title fontSize={'16px'}>{comic.title}</Title>
          <S.Image
            src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
            alt={comic.title}
          />
          <p>{comic.description}</p>
        </S.Container>
      ) : (
        <p>Carregando Hq...</p>
      )}
    </>
  );
};
