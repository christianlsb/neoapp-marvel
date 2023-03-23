import styled from 'styled-components';

import ImageBg from '../../assets/comicHome.jpg';
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 90vh;
  background-image: url(${ImageBg});
  background-size: cover;
  align-items: center;
`;

export const TextNeoComics = styled.p`
  color: white;
`;
