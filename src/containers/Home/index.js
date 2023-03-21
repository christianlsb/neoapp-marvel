import React, { useEffect, useState } from 'react';

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
        <h1>HQs da Marvel</h1>
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
