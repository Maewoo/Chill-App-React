import React from "react";

function MovieCardPortrait(props) {
    return (
        <>
        <div className="relative flex-shrink-0 w-[110px] sm:w-[140px] md:w-[180px] aspect-[2/3] rounded-lg overflow-hidden cursor-pointer group transition-transform duration-200 hover:scale-105 select-none bg-paper shadow-lg">

            {/* Poster*/}
        <img 
            src={props.image} 
            alt={props.title} 
            className="w-full h-full object-cover"
        />;
      

      {/* Episode Baru */}
      {props.isNew && (
          <div className="absolute top-2 left-2 bg-newepisode text-[8px] md:text-[9px] text-white px-2 py-0.5 rounded-full">
            Episode Baru
          </div>
        )}
        {/* Badge "Top 10" (jika props.isTop10 bernilai true) */}
        {props.isTop10 && (
            <div className="absolute w-5 h-7 top-0 right-2 bg-red-600 text-[7px] md:text-[8px] text-white  p-3px rounded-tr-md rounded-bl-md text-center">
            Top 10
            </div>
        )}

        </div>  
        </>
    )       
}

export default MovieCardPortrait;