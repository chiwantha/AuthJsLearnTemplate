import React from "react";

const Button = ({ children, type = "button", onClick }) => {
  return (
    <button
      type={type}
      onClick={onClick} // Will work if the parent is "use client"
      className="w-full bg-[#FF204E] text-white
        py-4 rounded-lg flex justify-center items-center
        hover:bg-[#A0153E] transition-colors duration-400
        text-xl font-semibold "
    >
      {children}
    </button>
  );
};

export default Button;
