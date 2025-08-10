import React from "react";
import Links from "./links/Links";

const Navbar = () => {
  return (
    <div className="w-full h-[45px]">
      <div
        className="mx-auto  max-w-7xl h-full flex 
      items-center justify-between border-slate-50/10 border-b"
      >
        <div className="">
          <h1 className="text-3xl uppercase font-black text-[#FF204E] tracking-tight">
            Navbar
          </h1>
        </div>
        <div className="">
          <Links />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
