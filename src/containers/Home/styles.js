import styled from 'styled-components';

import ImageBg from '../../assets/comicHome.jpg';
import { themes } from '../../styles/theme';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  background-image: url(${ImageBg});
  background-size: cover;
  align-items: center;
  justify-content: center;
`;

export const TextNeoComics = styled.p`
  color: ${themes.colors.white};
`;
