import React from 'react';
import Carousel from 'react-elastic-carousel';

import MarvelTest from '../../assets/marvelC.jpg';
export const CarouselComponent = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
  return (
    <>
      <Carousel
        itemsToShow={1}
        style={{ width: '300px', height: '40%' }}
        breakPoints={breakPoints}
      >
        <img src={MarvelTest} />
        <img src={MarvelTest} />
      </Carousel>
    </>
  );
};
