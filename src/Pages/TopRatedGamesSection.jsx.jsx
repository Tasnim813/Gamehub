import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TopRatedGamesSection() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("/Game.json")
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-center mt-10 text-cyan-400">Loading games...</p>;

  // Normalize function: lowercase + trim spaces
  const normalize = (str) => str.toLowerCase().replace(/\s+/g, "");

  // Filter games based on normalized search term
  const filteredGames = games.filter((game) =>
    normalize(game.title).includes(normalize(searchTerm))
  );

  return (
    <section className="max-w-[1250px] text-center mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
        Top Rated Games
      </h2>

      {/* Search Input */}
      <div className="text-center mb-6">
        <input
          type="text"
          placeholder="Search games by title..."
          className="w-full max-w-md px-4 py-2 rounded-lg border border-cyan-600 bg-[#0f172a] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Games Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <Link
              to={game.route}
              key={game.id}
              className="bg-[#0f172a] rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{game.title}</h3>
                <p className="text-sm text-gray-400">{game.info}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No games found
          </p>
        )}
      </div>
    </section>
  );
}
