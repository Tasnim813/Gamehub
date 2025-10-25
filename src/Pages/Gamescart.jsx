
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const GamesCart = ({ product }) => {
  const { coverPhoto, category, ratings, developer, title, id } = product;

  return (
    <Link to={`/product/${id}`}>
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0 10px 30px rgba(0, 255, 245, 0.5)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-gray-900 text-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-transform h-80 flex flex-col"
      >
        {/* Cover Photo */}
        <figure className="h-1/2 overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-t-2xl transition-transform duration-300 hover:scale-110"
            src={coverPhoto}
            alt={title}
          />
        </figure>

        {/* Game Info */}
        <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-cyan-300">{title}</h3>
            <p className="text-sm text-gray-200">Category: {category}</p>
          </div>

          <div className="flex justify-between items-center mt-2">
            {/* Ratings */}
            <div className="flex items-center gap-1 text-[#00FFF5] font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-pink-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.96a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.96c.3.921-.755 1.688-1.54 1.118l-3.37-2.447a1 1 0 00-1.176 0l-3.37 2.447c-.784.57-1.838-.197-1.539-1.118l1.287-3.96a1 1 0 00-.364-1.118L2.064 9.387c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.96z" />
              </svg>
              <span>{ratings}</span>
            </div>

            {/* Developer */}
            <div className="flex items-center gap-1 text-[#00FFF5] font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-pink-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a6 6 0 00-6 6v2H3a2 2 0 000 4h1v2a6 6 0 0012 0v-2h1a2 2 0 000-4h-1V8a6 6 0 00-6-6zM6 8a4 4 0 118 0v2H6V8z" />
              </svg>
              <span>{developer}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default GamesCart;
