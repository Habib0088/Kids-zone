import Logo from "@/components/Logo";
import Navlink from "@/components/Navlink";
import React from "react";
import { FaCartPlus } from "react-icons/fa";



const Navbar = () => {
  const nav = (
    < >
      <Navlink href={"/"}>Home</Navlink>
      <Navlink href={"/products"}>Products</Navlink>
      <Navlink href={"/blog"}>Blog</Navlink>
      <Navlink href={"/contact"}>Contact</Navlink>
    </>
  );
  return (
    <div className="md:w-11/12 mx-auto py-2">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul className="space-x-1"
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {nav}
            </ul>
          </div>
          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu space-x-4 menu-horizontal px-1">
           {nav}
          </ul>
        </div>
        <div className="navbar-end space-x-2">
            <FaCartPlus className="btn bg-primary outline-primary text-white text-sm" />


          <button className="btn outline-primary">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
