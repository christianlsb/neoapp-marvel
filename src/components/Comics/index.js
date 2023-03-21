import React, { useEffect, useState } from 'react';

import { getHqList } from '../../services/api';
import * as S from './styles';
export const Comics = () => {
  const [hqList, setHqList] = useState([]);
  console.log(hqList);
  useEffect(() => {
    getHqList().then(result => {
      const updatedHqList = result.map(hq => {
        const isRare = Math.random() <= 0.1;
        return { ...hq, isRare };
      });
      setHqList(updatedHqList);
    });
  }, []);
  return (
    <S.ContainerCardHq>
      {hqList.map(hq => (
        <S.CardHq className={hq.isRare ? 'isRare' : ''} key={hq.id}>
          {hq.title}
          <S.ImageCardHq
            src={`${hq.thumbnail.path}.${hq.thumbnail.extension}`}
            alt={hq.title}
          />
          <button>Get</button>
        </S.CardHq>
      ))}
    </S.ContainerCardHq>
  );
};
