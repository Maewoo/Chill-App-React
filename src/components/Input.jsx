import React, { useState } from "react";

import iconEye from '../assets/icon-eye.png'
function Input(props) {
  const [tampilkanPassword, setTampilkanPassword] = useState(false);

  const handleKlikMata = () => {
    setTampilkanPassword(!tampilkanPassword);
  };
  return (
    <>
      <div className="flex flex-col mb-4 w-full text-left">
        <label className="text-xs font-semibold text-gray-300 mb-1.5 pl-1">
          {props.label}
        </label>
        <div className="relative">
          <input
            type={props.type === "password" ? (tampilkanPassword ? "text" : "password") : props.type}
            placeholder={props.placeholder}
            className="w-full bg-transparent border-lightgray-700 text-white placeholder-gray-500 px-4 py-2 border border-gray-700 rounded-full focus:outline-none focus:ring-1 focus:ring-gray-500 text-xs"
          />
          {props.type === "password" && (
            <span
              onClick={handleKlikMata}
              className="absolute right-4 top-2.5 text-xs text=gray-500 cursor-pointer"
            >
              <img 
              src={iconEye} 
              alt="Toggle Password" 
              className="h-4 w-4 object-contain opacity-60 hover:opacity-100 transition"
            />
            </span>
          )}
        </div>
      </div>
    </>
  );
}
export default Input;
