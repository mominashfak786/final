import { Link, NavLink } from "react-router-dom";

import logo2 from "../assets/oterhs/logo -light.png"

import { useState } from 'react';
const Nav = ({type}) => {
 
    return (
      <div class="container mx-auto p-6">
      <div class="flex justify-between items-center">
        <div>
          <img class="w-1/2 md:w-1/2" src={logo2} alt="" />
        </div>
        <div class="text-xl flex gap-10 font-bold text-[#ffff]">
        <Link to="/">Home </Link>
          {
            type === "individual" && 
          <Link to="/regindivudal"><span className="whitespace-nowrap">Client-Registration</span></Link>
          }
          {
            type === "enterprice" && 
          <Link to="/regenterprise"><span className="whitespace-nowrap">Client Registration</span></Link>
          }
          <Link to="/career">Career </Link>
          <Link to="/blog">Blog </Link>
        </div>
      </div>
    </div>
    

    );
};

export default Nav;