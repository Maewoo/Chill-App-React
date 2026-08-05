import React from 'react';
import MovieCard from './MovieCard.jsx';

function MovieRow({ title, movies, imageField = "poster" }) {
  if (!movies || movies.length === 0) return null;
  return (
    <div className="my-6 md:my-8 text-left px-4 md:px-12">
      {/* Judul Kategori Section */}
      <h3 className="text-white text-xl md:text-2xl font-bold mb-4">
        {title}
      </h3>
    
      <div className="flex gap-3 md:gap-5 overflow-x-auto scrollbar-hide py-2 w-full snap-x">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} imageField={imageField} />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;