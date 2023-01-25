import React, { Link } from "react";
import Logo from "../assets/react-logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="w-[40px] md:w-[100px] md:m-0">
          <img
            src={Logo}
            alt="logo"
            className=" animate-spin hover:animate-none"
          />
        </div>
        <div className="flex flex-row top-0 right-0 text-sm md:text-2xl text-[#003140] bg-slate-200 fixed rounded z-30">
          <div className="hover:font-bold hover:underline bg-slate-200">
            <a href="#about" className="bg-slate-200">
              About
            </a>
          </div>
          <div className="hover:font-bold hover:underline bg-slate-200">
            <a href="#projects" className="bg-slate-200">
              Projects
            </a>
          </div>
          <div className="hover:font-bold hover:underline bg-slate-200">
            <a href="#contact" className="bg-slate-200">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
