
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signed out successfully");
        setUser(null);
      })
      .catch((error) => toast.error(error.message));
  };

  const Links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-3 py-2 font-semibold text-sm sm:text-base transition-colors duration-200 ${
            isActive ? "text-cyan-400" : "text-white hover:text-cyan-300"
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/upcoming"
        className={({ isActive }) =>
          `px-3 py-2 font-semibold text-sm sm:text-base transition-colors duration-200 ${
            isActive ? "text-cyan-400" : "text-white hover:text-cyan-300"
          }`
        }
      >
        Upcoming
      </NavLink>

      <NavLink
        to="/about/developer"
        className={({ isActive }) =>
          `px-3 py-2 font-semibold text-sm sm:text-base transition-colors duration-200 ${
            isActive ? "text-cyan-400" : "text-white hover:text-cyan-300"
          }`
        }
      >
        About Developer
      </NavLink>

      {user && (
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `px-3 py-2 font-semibold text-sm sm:text-base transition-colors duration-200 ${
              isActive ? "text-cyan-400" : "text-white hover:text-cyan-300"
            }`
          }
        >
          Profile
        </NavLink>
      )}
    </>
  );

  return (
    <nav
      className="navbar sticky top-0 z-50 w-full 
      bg-gradient-to-r from-[#081322]/90 to-[#0a0f1f]/90 
      backdrop-blur-lg border-b border-cyan-500/20 
      text-white shadow-md shadow-cyan-500/10"
    >
      <div className="w-11/12 mx-auto flex justify-between items-center py-2">
        {/* --- Left: Logo --- */}
        <Link to="/" className="flex items-center gap-2">
          <img
            className="w-10 h-10 sm:w-14 sm:h-14 drop-shadow-[0_0_6px_rgba(0,255,255,0.4)]"
            src="https://i.ibb.co.com/cKMk8Lwb/e71df2afa817fdc2af86fa2c0c5e4841-removebg-preview.png"
            alt="GameHub Logo"
          />
          <span className="text-xl sm:text-2xl font-extrabold tracking-wide text-cyan-300 drop-shadow-sm">
            Game<span className="text-pink-400">Hub</span>
          </span>
        </Link>

        {/* --- Desktop Nav Links --- */}
        <div className="hidden lg:flex items-center space-x-2">{Links}</div>

        {/* --- Auth Buttons (Desktop) --- */}
        {!user && (
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/login"
              className="btn bg-cyan-400 hover:bg-cyan-300 text-white font-semibold border-none shadow-md px-5 py-2 rounded-lg"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn bg-pink-400 hover:bg-pink-300 text-white font-semibold border-none shadow-md px-5 py-2 rounded-lg"
            >
              Register
            </Link>
          </div>
        )}

        {/* --- User Profile (Desktop) --- */}
        {user && (
          <div className="dropdown dropdown-end hidden lg:block">
            <label tabIndex={0}>
              <img
                src={user?.photoURL || "https://via.placeholder.com/88"}
                alt="User"
                className="h-10 w-10 rounded-full border-2 border-cyan-400 hover:scale-105 transition-transform shadow-md cursor-pointer"
              />
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 w-56 rounded-xl bg-[#101826] shadow-xl border border-cyan-700/40 p-4 text-center space-y-3"
            >
              <h1 className="text-lg font-bold text-cyan-300">
                {user?.displayName || user?.email}
              </h1>
              <Link
                to="/profile"
                className="btn bg-gradient-to-r from-cyan-400 to-pink-400 hover:opacity-90 text-white font-semibold border-none w-full shadow-md"
              >
                My Profile
              </Link>
              <button
                onClick={handleSignOut}
                className="btn bg-gradient-to-r from-red-500 to-orange-400 hover:opacity-90 text-white font-semibold border-none w-full shadow-md"
              >
                Sign Out
              </button>
            </ul>
          </div>
        )}

        {/* --- Mobile Menu --- */}
        <div className="lg:hidden dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-cyan-300 p-2 hover:bg-cyan-900/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content right-0 mt-3 w-56 p-4 rounded-xl bg-[#101826] shadow-lg border border-cyan-700/30 space-y-3"
          >
            {Links}
            <hr className="border-cyan-700/30" />
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="btn btn-sm bg-cyan-400 text-white border-none w-full hover:bg-cyan-300"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn btn-sm bg-pink-400 text-white border-none w-full hover:bg-pink-300"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/profile"
                  className="btn btn-sm bg-gradient-to-r from-cyan-400 to-pink-400 text-white border-none w-full"
                >
                  My Profile
                </Link>
                <button
                  onClick={handleSignOut}
                  className="btn btn-sm bg-gradient-to-r from-red-500 to-orange-400 text-white border-none w-full"
                >
                  Sign Out
                </button>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// import React, { useContext } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { AuthContext } from '../Context/AuthContext';
// import { signOut } from 'firebase/auth';
// import { auth } from '../Firebase/Firebase';
// import { toast } from 'react-toastify';

// const Navbar = () => {
//   const { user, setUser } = useContext(AuthContext);

//   const handleSignOut = () => {
//     signOut(auth)
//       .then(() => {
//         toast.success('Signed out successfully');
//         setUser(null);
//       })
//       .catch(error => toast.error(error.message));
//   };

//   const Links = (
//     <>
//       <NavLink
//         to="/"
//         className={({ isActive }) =>
//           `ml-3 font-semibold transition-colors duration-200 ${
//             isActive ? 'text-cyan-400' : 'text-white hover:text-cyan-300'
//           }`
//         }
//       >
//         Home
//       </NavLink>

//       <NavLink
//         to="/upcoming"
//         className={({ isActive }) =>
//           `ml-3 font-semibold transition-colors duration-200 ${
//             isActive ? 'text-cyan-400' : 'text-white hover:text-cyan-300'
//           }`
//         }
//       >
//         Upcoming
//       </NavLink>

//       <NavLink
//         to="/about/developer"
//         className={({ isActive }) =>
//           `ml-3 font-semibold transition-colors duration-200 ${
//             isActive ? 'text-cyan-400' : 'text-white hover:text-cyan-300'
//           }`
//         }
//       >
//         About Developer
//       </NavLink>

//       {user && (
//         <NavLink
//           to="/profile"
//           className={({ isActive }) =>
//             `ml-3 font-semibold transition-colors duration-200 ${
//               isActive ? 'text-cyan-400' : 'text-white hover:text-cyan-300'
//             }`
//           }
//         >
//           Profile
//         </NavLink>
//       )}
//     </>
//   );

//   return (
//     <div className="navbar sticky top-0 z-50 w-full 
//                     bg-gradient-to-r from-[#0a1a2f]/80 to-[#0a0f1f]/80 
//                     backdrop-blur-md border-b border-cyan-500/20 
//                     text-white shadow-md shadow-cyan-500/10">

//       {/* Left side: Logo */}
//       <div className="navbar-start">
//         <Link to="/" className="flex items-center gap-2">
//           <img
//             className="w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]"
//             src="https://i.ibb.co.com/cKMk8Lwb/e71df2afa817fdc2af86fa2c0c5e4841-removebg-preview.png"
//             alt="logo"
//           />
//           <span className="text-2xl font-extrabold tracking-wide text-cyan-300 drop-shadow-sm">
//             Game<span className="text-pink-400">Hub</span>
//           </span>
//         </Link>
//       </div>

//       {/* Right side: Navlinks + Auth */}
//       <div className="navbar-end space-x-4">
//         {/* Desktop Navlinks */}
//         <div className="hidden lg:flex items-center space-x-2">
//           {Links}
//         </div>

//         {/* Mobile dropdown */}
//         <div className="dropdown lg:hidden">
//           <div tabIndex={0} role="button" className="btn btn-ghost text-cyan-300">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-[#101826] rounded-box mt-3 w-52 p-2 shadow border border-cyan-700/30"
//           >
//             {Links}
//             {!user && (
//               <>
//                 <Link to="/login" className="btn btn-sm bg-cyan-400 mt-2 text-white border-none">
//                   Login
//                 </Link>
//                 <Link to="/register" className="btn btn-sm bg-pink-400 text-white border-none">
//                   Register
//                 </Link>
//               </>
//             )}
//           </ul>
//         </div>

//         {/* Auth Buttons / Profile */}
//         {user ? (
//           <div className="dropdown dropdown-end">
//             <label tabIndex={0}>
//               <img
//                 src={user?.photoURL || 'https://via.placeholder.com/88'}
//                 className="h-10 w-10 rounded-full border-2 border-cyan-400 hover:scale-105 transition-transform shadow-md cursor-pointer"
//                 alt="User"
//               />
//             </label>
//             <ul
//               tabIndex={0}
//               className="menu dropdown-content mt-3 w-56 rounded-xl bg-[#101826] shadow-xl border border-cyan-700/40 p-4 text-center space-y-3"
//             >
//               <h1 className="text-lg font-bold text-cyan-300">
//                 {user?.displayName || user?.email}
//               </h1>

//               <Link
//                 to="/profile"
//                 className="btn bg-gradient-to-r from-cyan-400 to-pink-400 hover:opacity-90 text-white font-semibold border-none w-full shadow-md"
//               >
//                 My Profile
//               </Link>

//               <button
//                 onClick={handleSignOut}
//                 className="btn bg-gradient-to-r from-red-500 to-orange-400 hover:opacity-90 text-white font-semibold border-none w-full shadow-md"
//               >
//                 Sign Out
//               </button>
//             </ul>
//           </div>
//         ) : (
//           <div className="hidden lg:flex space-x-3">
//             <Link
//               to="/login"
//               className="btn bg-cyan-400 hover:bg-cyan-300 text-white font-semibold border-none shadow-md"
//             >
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="btn bg-pink-400 hover:bg-pink-300 text-white font-semibold border-none shadow-md"
//             >
//               Register
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

// import React, { useContext } from 'react';
// import logo from '../assets/logo-removebg-preview.png';
// import { Link, NavLink } from 'react-router-dom';
// import { AuthContext } from '../Context/AuthContext';
// import { signOut } from 'firebase/auth';
// import { auth } from '../Firebase/Firebase';
// import { toast } from 'react-toastify';

// const Navbar = () => {
//   const { user, setUser } = useContext(AuthContext);

//   const handleSignOut = () => {
//     signOut(auth)
//       .then(() => {
//         toast.success('Signed out successfully');
//         setUser(null);
//       })
//       .catch(error => toast.error(error.message));
//   };

//   const Links = (
//     <>
//       <NavLink
//         to="/"
//         className={({ isActive }) =>
//           `ml-3 font-semibold hover:text-cyan-400 transition-colors ${
//             isActive ? 'text-cyan-400' : 'text-white'
//           }`
//         }
//       >
//         Home
//       </NavLink>

//       <NavLink
//         to="/upcoming"
//         className={({ isActive }) =>
//           `ml-3 font-semibold hover:text-cyan-400 transition-colors ${
//             isActive ? 'text-cyan-400' : 'text-white'
//           }`
//         }
//       >
//         upcoming
//       </NavLink>

//       <NavLink
//         to="/about/developer"
//         className={({ isActive }) =>
//           `ml-3 font-semibold hover:text-cyan-400 transition-colors ${
//             isActive ? 'text-cyan-400' : 'text-white'
//           }`
//         }
//       >
//        about developer
//       </NavLink>
//      {user && ( <NavLink
//         to="/profile"
//         className={({ isActive }) =>
//           `ml-3 font-semibold hover:text-cyan-400 transition-colors ${
//             isActive ? 'text-cyan-400' : 'text-white'
//           }`
//         }
//       >
//         Profile
//       </NavLink>)}
//     </>
//   );

//   return (
//     <div className="navbar sticky top-0 z-50 w-full bg-[#0a0a0a]/80 backdrop-blur-md border-b border-cyan-600/30 text-white shadow-lg">
//       <div className="navbar-start">
//         {/* Mobile dropdown */}
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-cyan-400">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content bg-[#1a1a1a] rounded-box mt-3 w-52 p-2 shadow border border-cyan-700/40"
//           >
//             {Links}
//           </ul>
//         </div>

//         {/* Logo & Title */}
//         <Link to="/" className="flex items-center gap-2">
//           <img className="w-12 h-12 md:w-16 md:h-16" src='https://i.ibb.co.com/cKMk8Lwb/e71df2afa817fdc2af86fa2c0c5e4841-removebg-preview.png' alt="logo" />
//           <span className="text-2xl font-extrabold tracking-wide text-cyan-400 drop-shadow-md">
//             Game<span className="text-pink-500">Hub</span>
//           </span>
//         </Link>
//       </div>

//       {/* Center links */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 space-x-2">{Links}</ul>
//       </div>

//       {/* Right section */}
//       {user ? (
       
//         <div className=" relative">
//           <button
//             popoverTarget="popover-1"
//             style={{ anchorName: '--anchor-1' }}
//             className="focus:outline-none"
//           >
//             <img
//               src={user?.photoURL || 'https://via.placeholder.com/88'}
//               className="h-10 w-10 rounded-full border-2 border-cyan-400 hover:scale-105 transition-transform shadow-md"
//               alt="User"
//             />
//           </button>

//           {/* 👇 Updated dropdown with profile link */}
//           <ul
//             className="dropdown menu w-56 rounded-box bg-[#1a1a1a] shadow-xl border border-cyan-700/40 p-4 text-center space-y-3"
//             popover="auto"
//             id="popover-1"
//             style={{ positionAnchor: '--anchor-1' }}
//           >
//             <h1 className="text-lg font-bold text-cyan-400">
//               {user?.displayName || user?.email}
//             </h1>

//             {/* 👇 Profile Route Button */}
//             <Link
//               to="/profile"
//               className="btn bg-gradient-to-r from-cyan-500 to-pink-500 hover:opacity-90 text-white font-semibold border-none w-full shadow-md"
//             >
//               My Profile
//             </Link>

//             <button
//               onClick={handleSignOut}
//               className="btn bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-white font-semibold border-none w-full shadow-md"
//             >
//               Sign Out
//             </button>
//           </ul>
//         </div>
//       ) : (
//         <div className="navbar-end space-x-3">
//           <Link
//             to="/login"
//             className="btn bg-cyan-500 hover:bg-cyan-400 text-white font-semibold border-none"
//           >
//             Login
//           </Link>
//           <Link
//             to="/register"
//             className="btn bg-pink-500 hover:bg-pink-400 text-white font-semibold border-none"
//           >
//             Register
//           </Link>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;


// import React, { useContext } from 'react';
// import logo from '../assets/logo-removebg-preview.png'
// import { Link, NavLink} from 'react-router';
// import { AuthContext } from '../Context/AuthContext';
// import { signOut } from 'firebase/auth';
// import { auth } from '../Firebase/Firebase';
// import { toast } from 'react-toastify';
// const Navbar = () => {
 
//   const { user, setUser } = useContext(AuthContext)

//   const handleSignOut = () => {
//     signOut(auth)
//       .then(() => {
//         toast.success('Signout Successfully');
//         setUser(null);
//       })
//       .catch(error => toast.error(error.message));
//   }

//   const Links = (
//     <>
//       <NavLink to='/' className='ml-2'><li>Banner</li></NavLink>
//       <NavLink to='/about' className='ml-2'><li>About</li></NavLink>
//       <NavLink to='/game' className='ml-2'><li>Game</li></NavLink>
//     </>
//   )
//   return (
//     <div className="navbar  w-11/12 m-auto ">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//           </div>
//           <ul
//             tabIndex="-1"
//             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//             {Links}
//           </ul>
//         </div>

//         <Link to='/'>  <img className='w-20 h-20  hidden md:block' src={logo} alt="" /></Link>
//         <Link to='/' className="text-xl">Gamehub</Link>

//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1 ">
//           {Links}
//         </ul>
//       </div>
//       {user ? (<div className='text-center space-y-4 '>
     

//         {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
//         {/* For TSX uncomment the commented types below */}
//         <button className="" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
//         <img src={user?.photoURL || 'https://via.placeholder.com/88'}
//           className='h-[40px] w-[40px] rounded-full mx-auto border-2 border-cyan-400'
//           alt="User"
//         />
//         </button>

//         <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
//           popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
             
//         <h1 className='text-xl font-bold text-cyan-400'>{user?.displayName || user?.email}</h1>
//         <button onClick={handleSignOut}
//           className="btn bg-orange-500 hover:bg-orange-400 text-white w-full mt-3 shadow-lg">
//           Sign Out
//         </button>
//         </ul>
//       </div>) : (
//         <div className="navbar-end">
//           <Link to="/login" className='btn btn-primary'>Login</Link>
//           <Link to="/register" className='btn btn-primary'>Register</Link>
//         </div>
//       )
//       }

//     </div>
//   );
// };

// export default Navbar;