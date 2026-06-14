import React from 'react';

import infoIcon from '../assets/icon-info.png';


// Kita masukkan objek props di dalam kurung fungsinya
function HeroBanner(props) {
  return (
    <div 
      className="relative w-full h-full aspect-video md:h-[65vh] md:aspect-none flex items-center px-4 md:px-12 bg-cover bg-center text-white"
      style={{ backgroundImage: `url('${props.backgroundImage}')` }}
    >
      {/* BG dim */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-home via-bg-home/70 via-45% to-black/0" />

      {/* Konten overlay text */}
      <div className="relative z-10 max-w-xs md:max-w-xl text-left pt-24 md:pt-0 md:mt-16">
        <h4 className="text-xl md:text-4xl font-bold mb-3">{props.judul}</h4>
        <p className="text-xs text-text-secondary leading-relaxed mb-5 line-clamp-2 md:line-clamp-none">
          {props.deskripsi}
        </p>

        {/* Button container */}
        <div className="flex items-center gap-2.5">
          <button className="bg-chill-blue hover:opacity-90 text-white text-xs px-4 py-2 md:py-2.5 rounded-full font-medium transition cursor-pointer">
            Mulai
          </button>
          
          <div className="bg-paper hover:bg-gray-700 flex items-center gap-1.5 px-4 py-3 md:py-2.5 rounded-full transition cursor-pointer">
            <img src={infoIcon} alt="info" className="w-3.5 h-3.5 object-contain" />
            <a href="#" className="text-white text-xs no-underline">Selengkapnya</a>
          </div>

          <div className="text-xs border border-text-secondary px-2 py-2 rounded-full text-center">
            <p>{props.ratingUsia}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;