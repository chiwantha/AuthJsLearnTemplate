"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Home",
    path: "/",
  },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Register", path: "/register" },
  { title: "Login", path: "/login" },
];

const Links = () => {
  const path = usePathname();
  return (
    <div
      className="flex items-center transition-transform 
    duration-300 ease-in-out"
    >
      {links.map((link) => (
        <Link
          key={link.title}
          href={link.path}
          className={`mx-2 
          font-semibold uppercase
          ${
            path == link.path
              ? "text-[#FF204E] text-[18px] "
              : "text-slate-300 text-[12px] hover:text-slate-200 "
          }`}
        >
          {link.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
