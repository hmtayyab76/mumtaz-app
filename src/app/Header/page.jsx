'use client';
import {React, useState, useEffect } from "react";
import HeaderLinks from "./HeaderLinks";
import WeConnect from "./WeConnect";

import About from "./About";

function Header() {
    
  return (
    <div className=" w-full ">
        <div className=" w-full home_bg bg-cover bg-no-repeat">
          <div className=" sticky top-0">
            {/* <HeaderLinks /> */}
          </div>
        <WeConnect/>

        </div>
        <About/>
    </div>
  )
}

export default Header