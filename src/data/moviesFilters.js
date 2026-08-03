import { MoviesData } from "../data/moviesData.js";

export function getTopRatingMovies(movies) {
  return movies
    .filter((m) => m.rating >= 4.6)
    // .sort((a, b) => b.rating - a.rating);
}

// console.log(getTopRatingMovies(MoviesData));

export function getTrendingMovies(movies) {
  return movies.filter((movie) => movie.isTrending === true);
}
// console.log(getTrendingMovies(MoviesData));

export function getLatestMovies(movies) {
  return movies.filter((movie) => {
    const releaseDate = new Date(movie.releaseDate);
    const currentDate = new Date();
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(currentDate.getMonth() - 6); //mengambil data film yang dirilis dalam 6 bulan terakhir
    return releaseDate >= oneMonthAgo && releaseDate <= currentDate;
  });
}
console.log(getLatestMovies(MoviesData));