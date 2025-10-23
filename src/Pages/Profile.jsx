import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";

import { motion } from "framer-motion";
import { Link } from "react-router";

const Profile = () => {
  const { user } = useContext(AuthContext);

  // Dynamic page title
  useEffect(() => {
    document.title = "My Profile | Gamehub";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white flex flex-col items-center justify-center p-6">
      {/* Animated Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#121212] border border-cyan-600/30 shadow-2xl rounded-2xl p-8 w-full max-w-md text-center"
      >
        <motion.img
          src={user?.photoURL || "https://via.placeholder.com/150"}
          alt="User"
          className="w-32 h-32 rounded-full border-4 border-cyan-400 mx-auto mb-5 shadow-lg hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
        />

        <h1 className="text-3xl font-extrabold text-cyan-400 mb-2">
          {user?.displayName || "Anonymous User"}
        </h1>
        <p className="text-gray-300 text-sm mb-4">{user?.email}</p>

        <div className="divider divider-accent my-4"></div>

        <div className="space-y-3">
          <p className="text-gray-400 text-sm">
            Welcome to your <span className="text-pink-500 font-semibold">Gamehub</span> profile!
          </p>
          <p className="text-gray-400 text-sm">
            Here you can manage your information and update your account details.
          </p>
        </div>

        <Link
          to="/profile/update"
          className="btn mt-6 bg-gradient-to-r from-cyan-500 to-pink-500 border-none hover:opacity-90 w-full text-white font-semibold shadow-md"
        >
          Update Information
        </Link>
      </motion.div>

      {/* Footer note */}
      <p className="mt-8 text-gray-500 text-sm">
        Need help? Contact{" "}
        <span className="text-cyan-400 hover:underline cursor-pointer">support@gamehub.com</span>
      </p>
    </div>
  );
};

export default Profile;
