import React from 'react'
import logoGoogle from '../assets/logo-google.png' 

function ButtonSSO(props) {
  return (
    <button 
      onClick={props.onClick}
      className="w-full border border-[#E7E3FC3B] bg-transparent hover:bg-gray-700 text-white text-xs py-2 px-4 rounded-full flex items-center justify-center gap-2 transition duration-200 cursor-pointer"
    >
      <img 
        src={logoGoogle} 
        alt="Google Logo" 
        className="h-3 w-3 object-contain" 
      /> 
      {props.teks}
    </button>
  )
}

export default ButtonSSO