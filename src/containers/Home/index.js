import React, { useEffect, useState } from 'react';

import { Header } from '../../components';
import { Title } from '../../components/Title/styles';
import { getHqList } from '../../services/api';
import * as S from './styles';

export const Home = () => {
  const [hqList, setHqList] = useState([]);

  useEffect(() => {
    getHqList().then(result => setHqList(result));
  }, []);

  return (
    <>
      <S.Container>
        <Header />
        <Title>HQs da Marvel</Title>
        <S.ContainerCardHq>
          {hqList.map(hq => (
            <S.CardHq key={hq.id}>
              {hq.title}
              <S.ImageCardHq
                src={`${hq.thumbnail.path}.${hq.thumbnail.extension}`}
                alt={hq.title}
              />
            </S.CardHq>
          ))}
        </S.ContainerCardHq>
      </S.Container>
    </>
  );
};
