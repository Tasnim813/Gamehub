import React, { useEffect } from "react";
import { motion } from "framer-motion";

// Example data (তুমি চাইলে JSON থেকে fetch করতে পারো)
const upcomingGamesData = [
  {
    id: "1",
    title: "Valorant 2.0",
    category: "FPS",
    releaseDate: "2025-12-01",
    coverPhoto: "https://i.ibb.co/XYZ/valorant.jpg",
  },
  {
    id: "2",
    title: "Cyberpunk: New Dawn",
    category: "RPG",
    releaseDate: "2026-01-15",
    coverPhoto: "https://i.ibb.co/XYZ/cyberpunk.jpg",
  },
  {
    id: "3",
    title: "FIFA 26",
    category: "Sports",
    releaseDate: "2025-11-20",
    coverPhoto: "https://i.ibb.co/XYZ/fifa26.jpg",
  },
  {
    id: "4",
    title: "GTA VI",
    category: "Action",
    releaseDate: "2026-03-05",
    coverPhoto: "https://i.ibb.co/XYZ/gta6.jpg",
  },
];

const UpcomingGames = () => {
  useEffect(() => {
    document.title = "Upcoming Games | Gamehub";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] text-white p-6 md:p-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-8 text-center">
        Upcoming Games
      </h1>

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
              <button className="mt-4 w-full bg-gradient-to-r from-cyan-500 to-pink-500 text-white py-2 rounded-full font-semibold hover:opacity-90 transition">
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
