import starIcon from '../assets/star.png';

function MovieCard({movie, imageField = "poster"}){
  const imageSrc = movie[imageField]
  const isPortrait = imageField === "poster";
    return(
        <>
        <div className="relative flex-shrink-0 w-[340px] md:w-[320px] md:h-[220px] rounded-lg overflow-hidden cursor-pointer group bg-paper transition-transform duration-200 hover:scale-105">
      
      {/* poster */}
      <div className="relative aspect-[16/10] md:aspect-video w-full h-full overflow-hidden">
        <img 
          src={imageSrc} 
          alt={movie.title} 
          className={`w-full rounded-md object-cover ${
          isPortrait ? "aspect-[2/3]" : "aspect-video"
        }`}
        />

        {/* Badge "Episode Baru" (jika props.isNew bernilai true) */}
        {movie.isNew && (
          <div className="absolute top-2 left-2 bg-newepisode text-[8px] md:text-[9px] text-white px-2 py-0.5 rounded-full">
            Episode Baru
          </div>
        )}

        {/* Badge "Top 10" (jika props.isTop10 bernilai true) */}
        {movie.isTop10 && (
          <div className="absolute w-5 h-7 top-0 right-2 bg-red-600 text-[7px] md:text-[8px] text-white  p-3px rounded-tr-md rounded-bl-md text-center">
            Top 10
          </div>
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end justify-between p-2 md:p-3 z-10">
  
        <h5 className="text-[11px] md:text-sm text-white font-bold truncate max-w-[60%] mb-[2px]">
            {movie.title}
        </h5>
        
        {movie.rating && (
            <div className="flex items-center gap-1 text-[10px] md:text-xs text-text-secondary font-medium whitespace-nowrap">
            <img 
                src={starIcon} 
                alt="Star" 
                className="w-3 h-3 md:w-3.5 md:h-3.5 object-contain" 
            />
            <span className="leading-none pt-[1px]">{movie.rating}</span>
            </div>
        )}

        </div>

    </div>
        </>
    )
}

export default MovieCard