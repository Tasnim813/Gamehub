import React from 'react';
import logo from '../assets/logo-removebg-preview.png'
import { Link, NavLink } from 'react-router';
const Navbar = () => {
    const Links=(
        <>
          <NavLink to='/' className='ml-2'><li>Banner</li></NavLink>
          <NavLink to='/about' className='ml-2'><li>About</li></NavLink>
          <NavLink to='/game' className='ml-2'><li>Game</li></NavLink>
        </>
    )
    return (
        <div className="navbar  w-11/12 m-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {Links}
      </ul>
    </div>
    
      <Link to='/'>  <img className='w-20 h-20  hidden md:block' src={logo} alt="" /></Link>
    <Link  to='/' className="text-xl">Gamehub</Link>
   
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 ">
      {Links}
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/login" className='btn btn-primary'>Login</Link>
  </div>
</div>
    );
};

export default Navbar;