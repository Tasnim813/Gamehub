import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
const AboutDeveloper = () => {
  useEffect(() => {
    document.title = "About Developer | Gamehub";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b  from-[#0a0a0a] to-[#1a1a1a] text-white p-6 md:p-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto bg-[#121212] border border-cyan-500/30 rounded-2xl shadow-2xl p-8 md:p-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6 text-center">
          About the Developer
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Developer Photo */}
          <motion.img
            src="https://i.ibb.co.com/cKV5qcs9/download.jpg"
            
            className="w-60 h-60 rounded-full border-4 border-pink-500 shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* Developer Info */}
          <motion.div
            className="text-center md:text-left flex-1"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-pink-400 mb-4">
              Tasnim Jahan
            </h2>
            <p className="text-gray-300 text-lg mb-4">
              Hi! I am a passionate game and web developer building engaging
              platforms for gamers. My focus is on creating vibrant, responsive
              websites that connect users to amazing indie games.
            </p>
            <p className="text-gray-400 text-base">
              Skills: React, Firebase, TailwindCSS, Framer Motion, API Integration, Responsive Design.
            </p>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="mt-8 flex justify-center md:justify-start gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <a href="https://github.com/Tasnim813" target="_blank"
            rel="noopener noreferrer" className="flex items-center  gap-1">
            <FaGithub className="text-cyan-400 hover:text-pink-400 transition text-xl"></FaGithub>
            <div className="text-cyan-400 hover:text-pink-400 transition text-xl"
            >

              GitHub
            </div>

          </a>
          <a href="https://www.linkedin.com/in/tasnim-jahan-034769380/" target="_blank"
            rel="noopener noreferrer" className="flex items-center  gap-1">
            <FaLinkedin className="text-cyan-400 hover:text-pink-400 transition text-xl"></FaLinkedin>
            <div className="text-cyan-400 hover:text-pink-400 transition text-xl"
            >

              Linkedin
            </div>

          </a>
          <a href="mailto:tasnim3j@gmail.com" target="_blank"
            rel="noopener noreferrer" className="flex items-center  gap-1">
          
            <CgMail className="text-cyan-400 hover:text-pink-400 transition text-xl"></CgMail>
            <div className="text-cyan-400 hover:text-pink-400 transition text-xl"
            >

              Email
            </div>

          </a>
         
          
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutDeveloper;
