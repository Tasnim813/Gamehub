// import React from 'react';

// const GameCartDetails = ({game}) => {
//   console.log(game)
//   return (
//     <div>
//       <div className=" flex bg-base-100  shadow-sm p-5 rounded-xl">
//   <figure>
//     <img className='h-[350px] w-[400px] rounded-xl'
//       src={game.coverPhoto}
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <p className="text-gray-300 text-sm">
//           Category: <span className="text-pink-400 font-semibold">{game.category}</span>
//         </p>
//         <p className="text-gray-200 text-sm leading-snug">{game.description}</p>

//         <div className="flex flex-wrap items-center gap-1 mt-1">
//           <span className="px-2 py-1 bg-cyan-600 text-white rounded-full font-semibold shadow-sm text-xs">
//             Ratings: {game.ratings}
//           </span>
//           <span className="px-2 py-1 bg-pink-500 text-white rounded-full font-semibold shadow-sm text-xs">
//             Developer: {game.developer}
//           </span>
//         </div>

//         <div className="card-actions justify-end mt-2">
//           <a
//             href={game.downloadLink}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn bg-gradient-to-r from-cyan-500 to-pink-500 hover:opacity-90 text-white font-semibold shadow-md px-3 py-2 text-sm"
//           >
//             Download
//           </a>
//         </div>
//     </div>
//   </div>
// </div>
   
//   );
// };

// export default GameCartDetails;

import React from 'react';

const GameCartDetails = ({ game }) => {
  if (!game) return <p className="text-center mt-20 text-white">Loading game...</p>;

  return (
    <div className="flex flex-col lg:flex-row bg-gray-900 rounded-2xl shadow-xl overflow-hidden max-w-6xl mx-auto p-5">
      {/* Left: Cover Image */}
      <figure className="lg:w-1/2 h-64 lg:h-auto overflow-hidden rounded-xl">
        <img
          className="h-[320px] w-[500px] object-cover rounded-l-2xl hover:scale-105 transition-transform duration-300"
          src={game.coverPhoto}
          alt={game.title}
        />
      </figure>

      {/* Right: Game Info */}
      <div className="lg:w-1/2 p-4 flex flex-col justify-between gap-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-cyan-400 drop-shadow-md">
          {game.title}
        </h2>

        <p className="text-gray-300 text-xl">
          Category: <span className="text-pink-400 font-semibold">{game.category}</span>
        </p>

        <p className="text-gray-200 text-xl leading-snug">{game.description}</p>

        <div className="flex flex-wrap items-center gap-2 mt-1 ">
          <span className="px-5 py-3 bg-cyan-500 text-white rounded-full font-semibold shadow-sm text-xs ">
            Ratings: {game.ratings}
          </span>
          <span className="px-5 py-3 bg-pink-500 text-white rounded-full font-semibold shadow-sm text-xs">
            Developer: {game.developer}
          </span>
        </div>

        <div className="card-actions justify-end mt-2">
          <a
            href={game.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-gradient-to-r from-cyan-500 to-pink-500 hover:opacity-90 text-white font-semibold shadow-md px-4 py-2 text-sm "
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameCartDetails;
