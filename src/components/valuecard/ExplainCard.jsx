import Link from "next/link";
import React from "react";

const ExplainCard = ({ title, description, link }) => {
  return (
    <div
      className="flex flex-col items-start justify-start rounded-lg p-4
    space-y-2 bg-slate-50/10 hover:bg-slate-50/20"
    >
      <h2 className="font-bold text-xl text-[#ff466b]">{title}</h2>
      <p className="text-slate-300 text-sm">{description}</p>
      <span className="text-xs text-blue-400 hover:text-blue-300">
        <Link href={link} target="_blank">
          Read More
        </Link>
      </span>
    </div>
  );
};

export default ExplainCard;
