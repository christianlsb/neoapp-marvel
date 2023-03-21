import styled from 'styled-components';

export const CardHq = styled.div`
  width: 200px;
  &.finished {
    background-color: red;
  }
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
