import React, { useState } from 'react';
import { IoCartOutline, IoMenuOutline } from 'react-icons/io5';

import * as S from './styles';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.Container>
      <S.MenuButton onClick={toggleMenu}>
        <IoMenuOutline color="#fff" size={20} />
      </S.MenuButton>
      <S.Nav isOpen={isOpen}>
        <S.NavItem to="/" onClick={toggleMenu}>
          Home
        </S.NavItem>
        <S.NavItem to="/comics" onClick={toggleMenu}>
          Comics
        </S.NavItem>
      </S.Nav>
      <S.CartButton to="/cart">
        <IoCartOutline size={20} />
        Cart
      </S.CartButton>
    </S.Container>
  );
};
