import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getComicById } from '../../services/api';
import * as S from './styles';

export const Comic = () => {
  const { id } = useParams();
  const [hqList, hqSetList] = useState();
  console.log(hqList);

  useEffect(() => {
    getComicById(id).then(result => {
      hqSetList(result);
    });
  }, [id]);

  if (!hqList) {
    return <div>Loading...</div>;
  }

  return <S.Container>{hqList.id}</S.Container>;
};
