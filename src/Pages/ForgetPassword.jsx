import React, { useState } from "react";
import { useLocation } from "react-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const ForgetPassword = () => {
  const location = useLocation();
  const prefilledEmail = location.state || "";
  const [email, setEmail] = useState(prefilledEmail);

  const handleReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset link sent to your email!");
      window.open("https://mail.google.com", "_blank"); // Gmail redirect
    } catch (err) {
      toast.error("Invalid or missing email address!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center text-cyan-300 mb-5">
          Reset Your Password
        </h1>
        <form onSubmit={handleReset} className="space-y-5">
          <div>
            <label className="text-gray-300 font-semibold">Email</label>
            <input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered w-full bg-gray-700 text-white border-gray-600 focus:border-cyan-400 mt-1"
            />
          </div>
          <button
            type="submit"
            className="btn w-full bg-cyan-500 hover:bg-cyan-400 text-white font-bold shadow-lg transition-all"
          >
            Reset Password
          </button>
        </form>
        <p className="text-center text-gray-400 mt-4 text-sm">
          Check your Gmail inbox for the reset link.
        </p>
      </motion.div>
    </div>
  );
};

export default ForgetPassword;
