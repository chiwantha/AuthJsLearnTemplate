"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const links = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
  { title: "Register", path: "/register" },
  { title: "Login", path: "/login" },
];

const Links = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [path]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Desktop Links */}
      <div className="hidden sm:flex items-center gap-4">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.path}
            className={`font-semibold uppercase transition-colors ${
              path === link.path
                ? "text-[#FF204E] text-lg"
                : "text-slate-300 text-sm hover:text-slate-200"
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="text-[#FF204E] text-3xl sm:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <IoClose /> : <IoMenu />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 transition-opacity duration-300 sm:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Content */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-3/4 bg-gradient-to-tr from-[#00224D] to-[#5D0E41] 
          border-l border-slate-50/10 transition-transform duration-300 ease-in-out sm:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="p-4 h-full flex flex-col">
          <button
            className="text-pink-400 text-3xl self-end focus:outline-none"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <IoClose />
          </button>

          <div className="flex-1 flex items-center justify-center">
            <nav className="w-full py-6 border-y border-slate-50/10">
              <ul className="flex flex-col items-center space-y-2">
                {links.map((link) => (
                  <li key={link.path} className="w-full text-center">
                    <Link
                      href={link.path}
                      className={`block  transition-colors ${
                        path === link.path
                          ? "text-[#FF204E] text-[26px] font-black"
                          : "text-slate-300 text-[18px] hover:text-slate-200"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
