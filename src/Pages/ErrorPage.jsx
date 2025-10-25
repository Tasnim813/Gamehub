import React from 'react';
import { Link } from 'react-router';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import { motion } from 'framer-motion';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] text-white">
      <Navbar />

      <motion.div
        className="flex-1 flex flex-col justify-center items-center text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-6xl md:text-8xl font-extrabold text-cyan-400 drop-shadow-lg mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-pink-400 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-300 max-w-lg mb-6">
          The page you are looking for does not exist. It might have been removed or the URL is incorrect.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 rounded-lg font-semibold shadow-md text-white transition"
        >
          Go Back Home
        </Link>
      </motion.div>

      <Footer />
    </div>
  );
};

export default ErrorPage;
