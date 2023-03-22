import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import { Title } from '../';
import { getHqList } from '../../services/api';
import { Button } from '../Buttton';
import * as S from './styles';

const loaderCss = css`
  display: block;
  margin: 0 auto;
`;

export const Comics = () => {
  const [hqList, setHqList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getHqList().then(result => {
      const updatedHqList = result.map(hq => {
        const isRare = Math.random() <= 0.1;
        return { ...hq, isRare };
      });

      setHqList(updatedHqList);
      setLoading(false);
    });
  }, []);

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
        <S.ContainerCardHq>
          {hqList.map(hq => (
            <S.CardHq className={hq.isRare ? 'isRare' : ''} key={hq.id}>
              <Title
                fontWeight={'500'}
                fontSize={'16px'}
                color={'rgb(58, 186, 238)'}
                marginBottom={'8px'}
              >
                {hq.title}
              </Title>
              <S.ImageCardHq
                src={`${hq.thumbnail.path}.${hq.thumbnail.extension}`}
                alt={hq.title}
              />
              <Link to={`/comics/${hq.id}`}>
                <Button
                  backgroundColor={'rgb(58, 186, 238)'}
                  Width={'180px'}
                  Height={'32px'}
                  Color={'white'}
                >
                  Mais Detalhes
                </Button>
              </Link>
            </S.CardHq>
          ))}
        </S.ContainerCardHq>
      )}
    </>
  );
};
