import starIcon from '../assets/star.png';

function MovieCard({movie, imageField = "poster"}){
  const isPortrait = imageField === "poster";
  const folderMap = {
    poster: "posters",
    backdrop: "backdrops",
    still: "stills"
  };
  const folder = folderMap[imageField] || "posters";
  const imageSrc = `/images/${folder}/${movie[imageField]}`;

    return(
        <>
      <div className={`relative flex-shrink-0 rounded-lg overflow-hidden cursor-pointer group bg-paper transition-transform duration-200 hover:scale-105 ${
          isPortrait
            ? "w-[160px] h-[240px] md:w-[140px] md:h-[240px]"
            : "w-[340px] h-[220px] md:w-[320px] md:h-[220px]"
        }`}>
        
      {/* poster */}
      <div className={`relative w-full h-full overflow-hidden ${
        isPortrait ? "aspect-[2/3]" : "aspect-[16/10] md:aspect-video"
      }`}>
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
        {movie.isTrending && (
          <div className="absolute w-5 h-7 top-0 right-2 bg-red-600 text-[7px] md:text-[8px] text-white  p-3px rounded-tr-md rounded-bl-md text-center">
            Top 10
          </div>
        )}
      </div>

      {/* Bottom overlay */}
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

      {/* Hover overlay */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black/95 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-3 md:p-4 z-20 rounded-lg">
        <div>
          <h4 className="text-sm md:text-base text-white font-bold mb-2 line-clamp-2">
            {movie.title}
          </h4>
        </div>

        <div className="space-y-2">
          {movie.ageRating && movie.ageRating !== "null" && (
            <div className="text-[10px] md:text-xs text-text-secondary">
              <span className="text-white font-semibold">{movie.ageRating}</span>
            </div>
          )}

          {movie.duration && movie.duration !== "null" && (
            <div className="text-[10px] md:text-xs text-text-secondary">
              <span>Duration: </span>
              <span className="text-white">{movie.duration}</span>
            </div>
          )}

          {movie.genre && movie.genre.length > 0 && (
            <div className="text-[10px] md:text-xs text-text-secondary">
              <div className="text-white flex flex-wrap gap-1">
                {movie.genre.map((g) => (
                  <span key={g} className="px-1.5 py-0.5 bg-white/20 rounded text-[9px]">
                    {g}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

    
        </>
    )
}

export default MovieCard