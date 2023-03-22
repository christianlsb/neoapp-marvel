import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  width: 200px;
  height: 302px;
  border: 1px solid #000;
  margin: 15px;
`;

export const ContainerHq = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;
  .displayPc {
    display: none;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    .displayPc {
      display: flex;
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
    image-hq {
      margin-left: 15px;
    }
  }
`;

export const Description = styled.p`
  width: 500px;
  font-size: 0.9em;
`;
