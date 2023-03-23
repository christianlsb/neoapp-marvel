import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${props => props.backgroundColor};
  width: ${props => props.Width};
  height: ${props => props.Height};
  color: ${props => props.Color};
  border-radius: 5px;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;
