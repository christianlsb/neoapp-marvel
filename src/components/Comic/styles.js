import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  background-color: #1a202c;
`;

export const Image = styled.img`
  width: 200px;
  height: 302px;
  border: 1px solid #000;
  margin: 15px;
  border-radius: 15px;
  @media (min-width: 1440px) {
    width: 400px;
    height: 500px;
  }
`;

export const ContainerHq = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;
  .displayPhone {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .displayPc {
    display: none;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    .displayPc {
      display: flex;
      margin-left: auto;
      margin-right: auto;
    }
    .displayPhone {
      display: none;
    }
    .divFlex {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 15px;
      gap: 15px;
    }
    @media (min-width: 1440px) {
      .displayPc {
        margin-left: auto;
        margin-right: auto;
        margin-top: 50px;
      }
    }
  }
`;

export const Description = styled.p`
  display: flex;
  width: 280px;
  font-size: 0.9em;
  @media (min-width: 768px) {
    font-size: 1.2em;
    width: 500px;
  }
`;
