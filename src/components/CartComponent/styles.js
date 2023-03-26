import styled from 'styled-components';

import { themes } from '../../styles/theme';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${themes.colors.background};
  height: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;
export const ContainerItemCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  @media (min-width: 1200px) {
    align-items: flex-start;
    margin-left: 25px;
  }
  .itens {
    display: flex;
    padding: 15px;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ContainerItem = styled.div`
  display: flex;
  background-color: ${themes.colors.white};
  flex-direction: column;
  width: 300px;
  height: 100px;

  border-radius: 15px;
  @media (min-width: 1200px) {
    width: 600px;
    height: 300px;
  }
  .divDeleteIten {
    font-size: 32px;
    @media (min-width: 1200px) {
      font-size: 50px;
    }
  }
`;

export const TitleHq = styled.p`
  padding-left: 5px;
  font-size: 14px;
  text-align: center;
  padding-right: 5px;
  color: ${themes.colors.default_color};
  @media (min-width: 1200px) {
    font-size: 32px;
  }
`;

export const ContainerEmpaty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: ${themes.colors.white};
    margin-top: 15px;
  }
`;

export const Image = styled.img`
  width: 65px;
  height: 80px;
  @media (min-width: 1200px) {
    width: 200px;
    height: 250px;
  }
`;

export const Checkout = styled.div`
  background-color: ${themes.colors.white};
  border-radius: 15px;
  margin-top: 15px;
  @media (min-width: 1200px) {
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    margin-top: 50px;
  }
`;
