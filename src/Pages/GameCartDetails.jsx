import React from 'react';

const GameCartDetails = ({game}) => {
    console.log(game)
    return (
       <div className="hero bg-base-200 shadow-sm min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={game.coverPhoto}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">{game.title}</h1>
      <p>category:{game.category}</p>
      <p className="py-6">
        {game.description}
      </p>
      <button className=" ">ratings:{game.ratings}</button>
      <p>developer :{game.developer}</p>
      <p>downloadLink: {game.downloadLink}</p>
    </div>
  </div>
</div>
    );
};

export default GameCartDetails;