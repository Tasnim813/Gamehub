// import React from 'react';

// const GameCartDetails = ({game}) => {
//     console.log(game)
//     return (
//        <div className="hero bg-base-200 shadow-sm min-h-screen">
//   <div className="hero-content flex-col lg:flex-row">
//     <img
//       src={game.coverPhoto}
//       className="max-w-sm rounded-lg shadow-2xl"
//     />
//     <div>
//       <h1 className="text-5xl font-bold">{game.title}</h1>
//       <p>category:{game.category}</p>
//       <p className="py-6">
//         {game.description}
//       </p>
//       <button className=" ">ratings:{game.ratings}</button>
//       <p>developer :{game.developer}</p>
//       <p>downloadLink: {game.downloadLink}</p>
//     </div>
//   </div>
// </div>
//     );
// };

// export default GameCartDetails;

import React from "react";
import { motion } from "framer-motion";

/**
 * GameHub - Game Details Page
 * Props:
 *   - game: { id, title, coverPhoto, category, description, ratings, developer, downloadLink }
 */
const GameCartDetails = ({ game }) => {
  if (!game) return <p className="text-center mt-20">Loading game...</p>;

  return (
    <motion.div
      className="min-h-screen bg-gray-900 text-white p-6 md:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left: Cover Image */}
        <div className="lg:w-1/2 h-80 lg:h-auto overflow-hidden relative">
          <img
            src={game.coverPhoto}
            alt={game.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right: Game Info */}
        <div className="lg:w-1/2 p-8 flex flex-col justify-between space-y-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
              {game.title}
            </h1>
            <p className="text-gray-300 mb-2 font-semibold">
              Category: <span className="text-white">{game.category}</span>
            </p>
            <p className="text-gray-200">{game.description}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <span className="px-4 py-2 bg-green-600 rounded-full font-semibold">
              Ratings: {game.ratings}
            </span>
            <span className="px-4 py-2 bg-orange-500 rounded-full font-semibold">
              Developer: {game.developer}
            </span>
            <a
              href={game.downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-lg font-bold transition-all duration-300"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GameCartDetails;
