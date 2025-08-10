import React from "react";

const ValueCard = ({ title, value }) => {
  return (
    <div className="flex flex-col rounded-lg bg-slate-50/10 hover:bg-slate-50/20 transition-colors duration-300 p-4 items-end">
      <h3 className="text-sm text-slate-300">{title}</h3>
      <h2 className="text-[#fd335b] font-black text-xl md:text-4xl max-lg:text-5xl">
        {value}+
      </h2>
    </div>
  );
};

export default ValueCard;
