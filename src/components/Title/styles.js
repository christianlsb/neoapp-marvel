import styled from 'styled-components';

export const Title = styled.h1`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  margin-bottom: ${props => props.marginBottom};
  margin-top: ${props => props.marginTop};
`;
