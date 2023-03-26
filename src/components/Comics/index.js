import { css } from '@emotion/react';
import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';

import { Title } from '../';
import { getHqList } from '../../services/api';
import { themes } from '../../styles/theme';
import { ButtonComponent } from '../ButtonComponent';
import * as S from './styles';

const loaderCss = css`
  display: block;
  margin: 0 auto;
`;

export const Comics = () => {
  const { data: hqList, isLoading } = useQuery('hqList', getHqList);

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

  return (
    <S.ContainerCardHq>
      {hqList.map(hq => (
        <S.CardHq className={hq.isRare ? 'isRare' : ''} key={hq.id}>
          <Title
            fontWeight={'500'}
            fontSize={'16px'}
            color={themes.colors.default_color}
            marginBottom={'8px'}
          >
            {hq.title}
          </Title>
          <S.ImageCardHq
            src={`${hq.thumbnail.path}.${hq.thumbnail.extension}`}
            alt={hq.title}
          />
          <Link to={`/comics/${hq.id}`}>
            <ButtonComponent
              backgroundColor={themes.colors.default_color}
              Width={'180px'}
              Height={'32px'}
              Color={'white'}
            >
              Mais Detalhes
            </ButtonComponent>
          </Link>
        </S.CardHq>
      ))}
    </S.ContainerCardHq>
  );
};
