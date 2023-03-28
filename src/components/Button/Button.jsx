import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, link }) => {
  return (
    <div className="flex justify-center items-center">
      <button className="bg-white px-7 py-3 mb-16 rounded-lg text-2xl border-neutral-400 border-2 text-black hover:text-white hover:shadow-[inset_23rem_0_0_0] hover:shadow-purple-800 duration-[500ms,800ms] transition-[color,box-shadow]">
        <Link to={link} className="font-extrabold">
          {text}
        </Link>
      </button>
    </div>
  );
};

export default Button;
