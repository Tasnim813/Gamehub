import React from "react";

const achievements = [
  {
    id: 1,
    title: "Fastest Game Completer",
    user: "PlayerOne",
    badge: "⚡",
    points: 1200,
  },
  {
    id: 2,
    title: "Most Played Genre",
    user: "GamerGal",
    badge: "🔥",
    points: 980,
  },
  {
    id: 3,
    title: "Weekly Top Player",
    user: "ShadowNinja",
    badge: "🏆",
    points: 1450,
  },
  {
    id: 4,
    title: "Best Strategy Master",
    user: "TacticalAce",
    badge: "🧠",
    points: 1100,
  },
];

export default function UserAchievements() {
  return (
    <section className="max-w-[1250px] mx-auto px-4 py-12">
      {/* Section Heading */}
      <h2 className="text-3xl text-center md:text-4xl font-extrabold mb-8 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">
        🏅 User Achievements Spotlight
      </h2>

      {/* Achievement Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {achievements.map((ach) => (
          <div
            key={ach.id}
            className="bg-[#0f172a] rounded-xl border border-cyan-900/40 shadow-md 
            hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition p-6 flex flex-col items-center text-center"
          >
            {/* Badge */}
            <div className="text-5xl mb-4 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]">
              {ach.badge}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-white mb-2">{ach.title}</h3>

            {/* User */}
            <p className="text-cyan-400 font-medium mb-2">{ach.user}</p>

            {/* Points */}
            <span className="text-gray-400 text-sm">{ach.points} pts</span>
          </div>
        ))}
      </div>
    </section>
  );
}
