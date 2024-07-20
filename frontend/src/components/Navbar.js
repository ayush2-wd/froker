import React, { useState } from 'react';
import Logo from './../img/nav/logo.png';
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="navbar bg-white sticky top-0 z-20 flex items-center h-[10vh] px-4 relative">
      <div className="navbar-start flex-1 flex items-center">
        <a href="/" className="btn btn-ghost text-xl flex items-center">
          <img src={Logo} alt="logo1" className="w-15 h-10" />
        </a>
        <div className="absolute right-0 lg:hidden">
          <button onClick={handleClick} className="btn btn-ghost">
            {click ? (
              <IoClose className="h-5 w-5" />
            ) : (
              <GiHamburgerMenu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
      <div className={`lg:hidden fixed top-0 right-0 h-[50vh] w-3/4 bg-base-100 z-10 transform ${click ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out overflow-y-auto`} style={{ marginTop: '3rem' }}>
        <ul className="menu p-4">
          <li><a href="/" className="text-orange-500">Home</a></li>
          <li><a href="/blogs" className="text-orange-500">Blogs</a></li>
          <li><a href="/froker" className="text-orange-500">Discover Froker</a></li>
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex items-center list-none text-center">
          <li className="nav-item text-[1.2rem] leading-10 mr-4 hover:after:w-full hover:after:bg-[#F76F32] after:transition-width after:ease-in-out after:duration-700 after:block after:h-[3px] after:w-0 after:bg-transparent">
            <a href="/" className="nav-links text-[#F76F32] no-underline py-2.5 px-4 border-b-3 border-transparent cursor-pointer font-semibold">Home</a>
          </li>
          <li className="nav-item text-[1.2rem] leading-10 mr-4 hover:after:w-full hover:after:bg-[#F76F32] after:transition-width after:ease-in-out after:duration-700 after:block after:h-[3px] after:w-0 after:bg-transparent">
            <a href="/blogs" className="nav-links text-[#F76F32] no-underline py-2.5 px-4 border-b-3 border-transparent cursor-pointer font-semibold">Blogs</a>
          </li>
          <li className="nav-item text-[1.2rem] leading-10 mr-4 hover:after:w-full hover:after:bg-[#F76F32] after:transition-width after:ease-in-out after:duration-700 after:block after:h-[3px] after:w-0 after:bg-transparent">
            <a href="/froker" className="nav-links text-[#F76F32] no-underline py-2.5 px-4 border-b-3 border-transparent cursor-pointer font-semibold">Discover Froker</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
