import React from "react";
import MovieCard from "./MovieCard.jsx";

function MovieRow({ title, movies, imageField = "poster" }) {
  if (!movies || movies.length === 0) return null;

  const containerRef = React.useRef(null);

  const scroll = (direction) => {
    const el = containerRef.current;
    if (!el) return;
    const scrollAmount = Math.round(el.clientWidth * 0.9);
    if (direction === "left") {
      el.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      el.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="my-6 md:my-8 text-left px-4 md:px-12">
      {/* Judul Kategori Section */}
      <h3 className="text-white text-xl md:text-2xl font-bold mb-4">{title}</h3>

      {/* <div className="flex gap-3 md:gap-5 overflow-x-auto scrollbar-hide py-2 w-full snap-x"> */}
      <div className="relative">
        {/* Left button - visible on desktop (md+) */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="hidden md:flex items-center justify-center absolute left-2 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-black bg-opacity-50 text-white rounded-full z-10 hover:bg-opacity-75"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div
          ref={containerRef}
          className="flex gap-3 md:gap-5 overflow-x-auto scrollbar-hide py-2 w-full snap-x"
        >
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} imageField={imageField} />
          ))}
        </div>

        {/* Right button - visible on desktop (md+) */}
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="hidden md:flex items-center justify-center absolute right-2 top-1/2 transform -translate-y-1/2 h-10 w-10 bg-black bg-opacity-50 text-white rounded-full z-10 hover:bg-opacity-75"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      {/* </div> */}
    </div>
  );
}

export default MovieRow;
