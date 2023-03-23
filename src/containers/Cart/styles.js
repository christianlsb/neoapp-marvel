import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1a202c;
  height: 100%;
  min-height: 100vh;
`;
export const ContainerItemCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

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
`;

export const InputCupon = styled.input`
  width: 300px;
  height: 32px;
  padding-left: 15px;
  border-radius: 5px;
  outline: none;
  border: 1px solid gray;
`;

export const TitleHq = styled.p`
  padding-left: 5px;
  font-size: 14px;
  text-align: center;
  padding-right: 5px;
  color: rgb(58, 186, 238);
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
