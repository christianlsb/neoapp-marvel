import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import { Title } from '../Title';
import * as S from './styles';
export const Header = () => {
  return (
    <>
      <S.Container>
        <Link style={{ textDecoration: 'none' }} to="/">
          <Title fontWeight={'500'} color="white" fontSize={'14px'}>
            NeoApp
          </Title>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/">
          <Title fontWeight={'500'} color="white" fontSize={'14px'}>
            Comics
          </Title>
        </Link>

        <Link to="/cart">
          <div className="cart">
            <IoCartOutline color="white" size={20} />
          </div>
        </Link>
      </S.Container>
    </>
  );
};
