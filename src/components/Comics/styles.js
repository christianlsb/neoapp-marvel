import styled from 'styled-components';

export const CardHq = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin-top: 20px;
  &.isRare {
    background-color: red;
  }
`;

export const ImageCardHq = styled.img`
  width: 200px;
  height: 265px;
  border-radius: 10px;
`;

export const ContainerCardHq = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  margin: auto;
  margin-top: 150px;
`;
