import styled from 'styled-components';

import { themes } from '../../styles/theme';
export const ResumeCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-left: 15px;
  border-radius: 10px;
  background-color: ${themes.colors.white};
  gap: 15px;
  padding-top: 25px;
  h1 {
    color: ${themes.colors.default_color};
  }
  p {
    color: ${themes.colors.default_color};
  }
  @media (min-width: 1200px) {
  }
`;
