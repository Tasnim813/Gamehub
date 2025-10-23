import React from 'react';

// import logo from '../assets/logo.png'
// import one from '../assets/Group.png'
// import two from '../assets/fi_145807.png'
// import three from '../assets/fi_5968764.png'

const Footer = () => {
    return (
  <div className=' bg-[#001931] mt-10'>
    <div className='max-w-7xl mx-auto pt-20 flex flex-col md:flex-row justify-between items-center'>
      <div className='flex items-center'>
      {/* <img className='w-10 h-10' src={logo} alt="" /> */}
      <p className='text-white'>HERO.IO</p>
    </div>
    <div>
      <p className='text-white'>Social Links</p>
      <div className='flex gap-3 mt-3'>
        {/* <img src={one} alt="" />
        <img src={two} alt="" />
        <img src={three} alt="" /> */}
      </div>
    </div>
    </div>
    <div className='text-gray-500 mt-5 md:mt-3'>
      <hr />
    </div>
    <div className='text-center p-3'>
      <p className='text-white'>Copyright © 2025 - All right reserved</p>
    </div>
  </div>
        
    );
};

export default Footer;