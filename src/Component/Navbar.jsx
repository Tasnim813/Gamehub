
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
