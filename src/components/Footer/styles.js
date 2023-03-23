import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  color: #333;
  padding: 20px;
  font-size: 14px;
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;
