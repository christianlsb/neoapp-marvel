import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { themes } from '../../styles/theme';
export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${themes.colors.default_color};
  padding: 10px 20px;
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 14px;
  left: 0;
  width: 100%;
  background-color: ${themes.colors.default_color};
  padding: 20px;
`;

export const NavItem = styled(Link)`
  color: ${themes.colors.white};
  text-decoration: none;
  margin-bottom: 10px;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

export const CartButton = styled(Link)`
  display: flex;
  align-items: center;
  color: ${themes.colors.white};
  text-decoration: none;
  font-size: 20px;

  svg {
    margin-right: 5px;
  }
`;
