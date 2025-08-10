import React from "react";

const FeatureCard = ({ text }) => {
  return (
    <div className="text-blue-100 bg-slate-50/10 hover:bg-blue-50/20 transition-colors duration-300 rounded-lg px-4 py-2">
      <span>{text}</span>
    </div>
  );
};

export default FeatureCard;
