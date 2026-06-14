import React from 'react';
import starIcon from '../assets/star.png';

function HoverDetail({ image, title, isTop10, isNew, ageRating, episodes, rating, tags }) {
  const movieTags = tags || ["Misteri", "Kriminal", "Fantasi"];

  return (
    /* ─── DETAIL POP-OUT UNIVERSAL (Selalu Berbentuk Landscape saat Hover - image_392786.png) ─── */
    <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] bg-[#181818] rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.9)] border border-gray-800 opacity-0 pointer-events-none scale-75 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:scale-100 transition-all duration-300 delay-100 z-50">
      
      <div className="relative w-full aspect-video bg-gray-900">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#181818] to-transparent" />
        
        {isTop10 && (
          <div className="absolute top-0 right-3 w-[18px] min-h-[26px] bg-red-600 text-white text-center pt-[4px] pb-[4px] rounded-b-[2px] shadow-md">
            <p className="text-[7px] font-black leading-none uppercase">Top</p>
            <p className="text-[10px] font-black leading-none mt-[2px]">10</p>
          </div>
        )}

        {isNew && (
          <div className="absolute top-2 left-3 bg-blue-600 text-[8px] text-white font-bold px-2 py-0.5 rounded-full shadow-md">
            Episode Baru
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col gap-3 text-white bg-[#181818]">
        
        {/* Teks Judul Film */}
        <h4 className="text-xs font-bold truncate -mb-1">{title}</h4>

        {/* Baris Tombol Kontrol Aksi */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-200 transition-colors">
              <span className="text-xs pl-[2px]">▶</span>
            </button>
            <button className="w-8 h-8 rounded-full border-2 border-gray-500 text-white flex items-center justify-center hover:border-white transition-colors">
              <span className="text-sm font-medium">✓</span>
            </button>
          </div>
          <button className="w-8 h-8 rounded-full border-2 border-gray-500 text-white flex items-center justify-center hover:border-white transition-colors">
            <span className="text-xs">▼</span>
          </button>
        </div>

        {/* Metadata Informasi (Rating Usia, Episode, & Skor Bintang) */}
        <div className="flex items-center gap-2 text-xs font-semibold">
          <span className="bg-[#333] px-1.5 py-0.5 rounded text-gray-300 text-[10px]">
            {ageRating || "13+"}
          </span>
          <span className="text-gray-400">
            {episodes || "16 Episode"}
          </span>
          {rating && (
            <div className="flex items-center gap-0.5 ml-auto text-yellow-400 text-[11px]">
              <img src={starIcon} alt="Star" className="w-3 h-3 object-contain inline mr-0.5" />
              <span>{rating}</span>
            </div>
          )}
        </div>

        {/* Daftar Genre / Tags Terpisah Titik Tengah */}
        <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-[11px] text-gray-300 font-medium">
          {movieTags.map((tag, idx) => (
            <React.Fragment key={idx}>
              <span>{tag}</span>
              {idx < movieTags.length - 1 && (
                <span className="text-gray-600 font-black text-xs select-none">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>

    </div>
  );
}

export default HoverDetail;