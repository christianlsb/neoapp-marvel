import React, { useState, useEffect } from 'react';

import Comic1 from '../../assets/comic1.jpg';
import Comic2 from '../../assets/comic2.jpg';
import Comic3 from '../../assets/comic3.jpg';
import Comic4 from '../../assets/comic4.jpg';
import * as S from './styles';

const images = [Comic1, Comic2, Comic3, Comic4];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <S.Container>
      {images.map((image, index) => (
        <S.Image
          key={index}
          src={image}
          alt={`Image ${index}`}
          style={{ display: index === currentIndex ? 'block' : 'none' }}
        />
      ))}
    </S.Container>
  );
};
export default Carousel;
