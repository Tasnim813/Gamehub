import React, { useEffect } from "react";
import { motion } from "framer-motion";

const upcomingGamesData = [
  {
    id: "1",
    title: "Valorant 2.0",
    category: "FPS",
    releaseDate: "2025-12-01",
    coverPhoto: "https://i.ibb.co.com/9ktBYxcp/7fe2762045cd672f6f7ed248ca4c407c.jpg",
  },
  {
    id: "2",
    title: "Cyberpunk: New Dawn",
    category: "RPG",
    releaseDate: "2026-01-15",
    coverPhoto: "https://i.ibb.co.com/B5ySStN0/ff798a50398a1d5e15d430ce6d3260f0.jpg",
  },
  {
    id: "3",
    title: "FIFA 26",
    category: "Sports",
    releaseDate: "2025-11-20",
    coverPhoto: "https://i.ibb.co.com/YFkJkxcn/e120bc5121c7f5daf8e8c03dd5c84bcb.jpg",
  },
  {
    id: "4",
    title: "GTA VI",
    category: "Action",
    releaseDate: "2026-03-05",
    coverPhoto: "https://i.ibb.co.com/Xxb0WkKJ/0e1ea5a9005178f78e7ce88c172813b9.jpg",
  },
];

const UpcomingGames = () => {
  useEffect(() => {
    document.title = "Upcoming Games | Gamehub";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] text-white p-6 md:p-12">
      {/* Heading + info */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-4">
          Upcoming Games
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover the most anticipated releases coming soon! Stay ahead and
          never miss a launch — check out the hottest upcoming games of this
          season.
        </p>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {upcomingGamesData.map((game, index) => (
          <motion.div
            key={game.id}
            className="bg-[#121212] rounded-2xl overflow-hidden shadow-2xl border border-pink-500/30"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            {/* Cover Photo */}
            <img
              src={game.coverPhoto}
              alt={game.title}
              className="w-full h-48 object-cover hover:scale-105 transition duration-300"
            />

            {/* Game Info */}
            <div className="p-4">
              <h2 className="text-xl font-bold text-pink-400">{game.title}</h2>
              <p className="text-gray-300 mt-1">{game.category}</p>
              <p className="text-gray-400 mt-1">
                Release Date: {new Date(game.releaseDate).toLocaleDateString()}
              </p>
              <button className="mt-4 w-full bg-cyan-500 text-white py-2 rounded-full font-semibold hover:bg-cyan-400 transition">
                Notify Me
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingGames;
