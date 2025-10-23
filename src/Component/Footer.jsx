// import React from 'react';

// // import logo from '../assets/logo.png'
// // import one from '../assets/Group.png'
// // import two from '../assets/fi_145807.png'
// // import three from '../assets/fi_5968764.png'

// const Footer = () => {
//     return (
//   <div className=' bg-[#001931] mt-10'>
//     <div className='max-w-7xl mx-auto pt-20 flex flex-col md:flex-row justify-between items-center'>
//       <div className='flex items-center'>
//       {/* <img className='w-10 h-10' src={logo} alt="" /> */}
//       <p className='text-white'>HERO.IO</p>
//     </div>
//     <div>
//       <p className='text-white'>Social Links</p>
//       <div className='flex gap-3 mt-3'>
//         {/* <img src={one} alt="" />
//         <img src={two} alt="" />
//         <img src={three} alt="" /> */}
//       </div>
//     </div>
//     </div>
//     <div className='text-gray-500 mt-5 md:mt-3'>
//       <hr />
//     </div>
//     <div className='text-center p-3'>
//       <p className='text-white'>Copyright © 2025 - All right reserved</p>
//     </div>
//   </div>
        
//     );
// };

// export default Footer;

import React from "react";
import { motion } from "framer-motion";

// import fbIcon from '../assets/fb.png'
// import twitterIcon from '../assets/twitter.png'
// import instaIcon from '../assets/insta.png'

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 text-white mt-10"
    >
      {/* Top section */}
      <div className="max-w-7xl mx-auto py-16 px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold text-cyan-400 drop-shadow-lg">GameHub</h2>
        </div>

        {/* Social Links */}
        <div className="text-center md:text-left">
          <p className="text-gray-300 font-semibold mb-2">Follow Us</p>
          <div className="flex gap-4 justify-center md:justify-start">
            {/* Placeholder social icons */}
            <motion.span
              whileHover={{ scale: 1.2, backgroundColor: "#00D390" }}
              className="px-3 py-1 bg-cyan-600 rounded-full cursor-pointer text-sm transition-colors"
            >
              FB
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2, backgroundColor: "#00D390" }}
              className="px-3 py-1 bg-cyan-600 rounded-full cursor-pointer text-sm transition-colors"
            >
              TW
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.2, backgroundColor: "#00D390" }}
              className="px-3 py-1 bg-cyan-600 rounded-full cursor-pointer text-sm transition-colors"
            >
              IG
            </motion.span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom copyright */}
      <div className="text-center py-4 text-gray-400 text-sm flex flex-col md:flex-row justify-center items-center gap-2">
        <p>
          &copy; 2025 <span className="text-cyan-400 font-semibold">GameHub</span> - All rights reserved
        </p>
        <p className="text-orange-400 text-xs md:text-sm">Designed with Urban Gaming Vibe</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
