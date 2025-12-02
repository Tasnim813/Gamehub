// TopRatedGames.jsx
import React from "react";

const topRated = [
  {
    id: 1,
    title: "Nebula Knights",
    rating: 4.9,
    info: "1248 reviews",
    image: "https://i.ibb.co.com/DfnxBnf0/b17e6e3531e14b23b130490afdf6b26d.webp",
  },
  {
    id: 2,
    title: "Skyborne Racers",
    rating: 4.8,
    info: "987 reviews",
    image: "https://i.ibb.co.com/ZR3KPV4C/d6dd2e4b57337f2b54833b70a17cd8dec1320450e3cb1a291548ed04bad00a98-SX1080-FMjpg.jpg",
  },
  {
    id: 3,
    title: "Mystic Puzzles",
    rating: 4.7,
    info: "2034 reviews",
    image: "https://i.ibb.co.com/ZRx6qdZF/unnamed.webp",
  },
];

export default function TopRatedGames() {
  return (
    <section className="max-w-[1250px] mx-auto px-4 py-12">
      {/* heading */}
      <h2 className="text-3xl text-center md:text-4xl font-extrabold mb-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
        Top Rated Games
      </h2>

      {/* cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {topRated.map((game) => (
          <div
            key={game.id}
            className="bg-[#0f172a] border border-cyan-900/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] 
            rounded-xl overflow-hidden hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] 
            transition shadow-md"
          >
            <div className="relative">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-48 object-cover"
              />

              {/* Rating badge */}
              <span className="absolute top-3 left-3 bg-cyan-600/80 text-white px-3 py-1 rounded-full text-sm font-semibold drop-shadow-lg">
                ⭐ {game.rating}
              </span>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">{game.title}</h3>

              {/* Small info */}
              <p className="text-sm text-gray-400 mt-1">{game.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
