import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #fff;
`;

export const CardHq = styled.div`
  width: 200px;
`;

export const ImageCardHq = styled.img`
  width: 200px;
  height: 265px;
`;

export const ContainerCardHq = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
