import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(58, 186, 238);
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
  top: 5%;
  left: 0;
  width: 100%;
  background-color: rgb(58, 186, 238);
  padding: 20px;
`;

export const NavItem = styled(Link)`
  color: #fff;
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
  color: #fff;
  text-decoration: none;
  font-size: 20px;

  svg {
    margin-right: 5px;
  }
`;
