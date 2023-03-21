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
  button {
    border: none;
    background-color: rgb(58, 186, 238);
    color: white;
    width: 180px;
    margin-top: 5px;
    border-radius: 5px;
    height: 32px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
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
