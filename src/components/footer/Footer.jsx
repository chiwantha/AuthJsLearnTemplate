import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div
      className="h-[45px] border-t
     border-slate-50/10 justify-between flex items-center"
    >
      <div className="text-slate-300 text-sm">
        <span>Next Auth Learn Project</span>
      </div>
      <div className="text-slate-300 text-sm">
        <span>Powered By </span>
        <Link href={"https://kchord.com"} className="text-[#ff4a6e] font-bold ">
          K Chord (Pvt) Ltd
        </Link>
      </div>
    </div>
  );
};

export default Footer;
