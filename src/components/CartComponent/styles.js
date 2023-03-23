import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1a202c;
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
  flex-direction: column;
  width: 300px;
  height: 100px;
  border: 1px solid gray;

  border-radius: 5px;
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
  color: rgb(58, 186, 238);
  @media (min-width: 1200px) {
    font-size: 32px;
  }
`;

export const ContainerEmpaty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    color: white;
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
  @media (min-width: 1200px) {
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    margin-top: 50px;
  }
`;
