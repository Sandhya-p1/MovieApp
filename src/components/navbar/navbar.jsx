import { Menu, Plus, Search } from "lucide-react";
import React from "react";

import NavList from "./nav-list/navlist";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigateHome = useNavigate();
  return (
    <div className="bg-zinc-900 w-full sticky top-0 z-50 text-gray-100 h-16 px-6 md:px-20 lg:px-32 py-2 flex items-center  justify-between ">
      {/* Left side headings */}
      <div className="flex-1 items-center flex justify-between md:justify-start gap-x-8">
        <Menu className="cursor-pointer md:hidden" />
        <h1
          className="text-2xl font-bold text-green-400 cursor-pointer "
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
        <Plus className="text-white hidden md:flex" size={24} />
        <p className="text-nowrap">Login</p>
        <p className=" text-nowrap">Register Now</p>
        <Search className="text-green-400 cursor-pointer mx-2 hover:text-green-500" />
      </div>
    </div>
  );
}

export default Navbar;
