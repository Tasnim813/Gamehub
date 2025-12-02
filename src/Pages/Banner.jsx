import React from 'react';
import Carousel from './Carousel';
import PopularGames from './PopularGames';
import Newsletter from './Newsletter';
import TopRatedGames from './TopRatedGames';

import UserAchievements from './UserAchievements';
import TopRatedGamesSection from './TopRatedGamesSection.jsx';


const Banner = () => {
  return (
    <div>
      <Carousel></Carousel>

      <PopularGames></PopularGames>
     <Newsletter></Newsletter>
   <UserAchievements></UserAchievements>
      <TopRatedGames></TopRatedGames>

   

      </div>
  );
};

export default Banner;