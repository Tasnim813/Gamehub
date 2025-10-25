import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router";

const ProfileUpdate = () => {
  const { user, setUser } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Update Profile | Gamehub";
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!name || !photo) {
      toast.error("Please fill out all fields!");
      return;
    }

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        toast.success("Profile Updated Successfully!");
        setUser({ ...user, displayName: name, photoURL: photo });
        navigate("/profile");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] text-white flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#121212] border border-pink-600/30 shadow-2xl rounded-2xl p-8 w-full max-w-md text-center"
      >
        <h1 className="text-3xl font-extrabold text-cyan-400 mb-6">
          Update Your Profile
        </h1>

        <motion.img
          src={photo || "https://via.placeholder.com/150"}
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-pink-400 mx-auto mb-5 shadow-lg hover:scale-105 transition-transform"
          whileHover={{ scale: 1.05 }}
        />

        <form onSubmit={handleUpdate} className="space-y-5">
          <div className="text-left">
            <label className="block mb-1 text-sm text-gray-300">
              Display Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full bg-[#1c1c1c] border-cyan-600 focus:border-pink-500 text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="text-left">
            <label className="block mb-1 text-sm text-gray-300">
              Photo URL
            </label>
            <input
              type="text"
              placeholder="Enter photo URL"
              className="input input-bordered w-full bg-[#1c1c1c] border-cyan-600 focus:border-pink-500 text-white"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            className="btn w-full bg-cyan-500 border-none text-white font-semibold shadow-md hover:bg-cyan-400 transition-colors"
          >
           Update Information
          </motion.button>
        </form>

        <Link
          to="/profile"
          className="block mt-6 text-sm text-cyan-400 hover:underline"
        >
          ← Back to Profile
        </Link>
      </motion.div>

      <p className="mt-6 text-gray-500 text-sm">
        All updates are synced securely with{" "}
        <span className="text-pink-400 font-semibold">Firebase Auth</span>.
      </p>
    </div>
  );
};

export default ProfileUpdate;

