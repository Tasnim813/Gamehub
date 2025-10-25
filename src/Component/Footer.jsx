import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-white "
    >
      <div className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 sm:grid-cols-4 gap-10">
        {/* Logo */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-2xl font-bold text-cyan-300 drop-shadow-lg">
            Game<span className="text-pink-400">Hub</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Bringing indie games and players together with urban gaming vibes.
          </p>
          <div className="flex gap-3 mt-2">
            <span className="px-3 py-1 bg-cyan-700 hover:bg-cyan-500 text-white rounded-full cursor-pointer text-sm transition-colors"><FaFacebookF /></span>
            <span className="px-3 py-1 bg-pink-700 hover:bg-pink-500 text-white rounded-full cursor-pointer text-sm transition-colors"><CiTwitter /></span>
            <span className="px-3 py-1 bg-cyan-700 hover:bg-cyan-500 text-white rounded-full cursor-pointer text-sm transition-colors"><FaInstagramSquare />
</span>
          </div>
        </div>

        {/* Services */}
        <div>
          <h6 className="footer-title text-cyan-300 font-bold mb-3">Services</h6>
          <ul className="space-y-2 text-gray-200">
            <li className="hover:text-cyan-400 cursor-pointer">Game Reviews</li>
            <li className="hover:text-cyan-400 cursor-pointer">Indie Game Support</li>
            <li className="hover:text-cyan-400 cursor-pointer">Upcoming Games</li>
            <li className="hover:text-cyan-400 cursor-pointer">Game Guides</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h6 className="footer-title text-cyan-300 font-bold mb-3">Company</h6>
          <ul className="space-y-2 text-gray-200">
            <li className="hover:text-pink-400 cursor-pointer">About Developer</li>
            <li className="hover:text-pink-400 cursor-pointer">Contact Us</li>
            <li className="hover:text-pink-400 cursor-pointer">Careers</li>
            <li className="hover:text-pink-400 cursor-pointer">Press Kit</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h6 className="footer-title text-cyan-300 font-bold mb-3">Legal</h6>
          <ul className="space-y-2 text-gray-200">
            <li className="hover:text-cyan-400 cursor-pointer">Terms of Service</li>
            <li className="hover:text-cyan-400 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-cyan-400 cursor-pointer">Cookie Policy</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-cyan-600/40"></div>

      {/* Bottom copyright */}
      <div className="text-center py-4 text-gray-400 text-sm flex flex-col md:flex-row justify-center items-center gap-2">
        <p>
          &copy; 2025{" "}
          <span className="text-cyan-300 font-semibold">Game<span className="text-pink-400">Hub</span></span> - All rights reserved
        </p>
        <p className="text-pink-400 text-xs md:text-sm">Designed with Urban Gaming Vibe</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
