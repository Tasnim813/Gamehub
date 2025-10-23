import React from 'react';
import Carousel from './Carousel';
import PopularGames from './PopularGames';
import Newsletter from './Newsletter';

const Banner = () => {
  return (
    <div>
      <Carousel></Carousel>

      <PopularGames></PopularGames>

      <Newsletter></Newsletter>

      </div>
  );
};

export default Banner;