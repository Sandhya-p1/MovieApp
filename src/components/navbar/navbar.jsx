import { Menu, Plus, Search } from "lucide-react";
import React from "react";
import NavList from "./nav-list/navlist";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/authContext";

// import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  // const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const navigateHome = useNavigate();
  const { user, error, handleGoogleSignOut, handleGoogleSignUp } = useAuth();

  const getFirstName = (displayName) => {
    return displayName.split(" ")[0];
  };

  return (
    <div className="bg-zinc-900 w-full sticky top-0 z-50 text-gray-100 h-16 px-6 md:px-20 lg:px-32 py-2 flex items-center  justify-between ">
      {/* Left side headings */}
      <div className="flex-1 items-center flex justify-between md:justify-start gap-x-8">
        <Menu className="cursor-pointer md:hidden" />
        <h1
          className="text-2xl font-bold text-emerald-500 cursor-pointer "
          onClick={() => navigateHome("/")}
        >
          CinemaNEX
        </h1>

        <NavList />

        <p className="cursor-pointer md:hidden hover:underline  text-lg">
          Sign In
        </p>
      </div>
      {/* Right side headings  */}
      <div className="md:flex items-center gap-x-4 hidden">
        {/* <Plus className="text-white hidden md:flex" size={24} /> */}
        {user && (
          <>
            <img
              src="{user.photoURL} "
              className="rounded-full h-7 w-7 object-center "
            />
            <p className="text-nowrap">{getFirstName(user.displayName)}</p>
          </>
        )}
        {!user ? (
          <button
            onClick={handleGoogleSignUp}
            className="text-green-500 hover:text-green-600 font-medium"
          >
            Sign Up with Google
          </button>
        ) : (
          <button
            onClick={handleGoogleSignOut}
            className="text-red-500 hover:text-red-600 font-medium"
          >
            Sign Out
          </button>
        )}
        {error && <p>Unable to login!! Please try again </p>}
      </div>
    </div>
  );
}

export default Navbar;
