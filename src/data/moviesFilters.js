//import { MoviesData } from "../data/moviesData.js";

export function getTopRatingMovies(movies) {
  return movies
    .filter((m) => m.rating >= 4.6)
    .sort((a, b) => b.rating - a.rating);
}

// console.log(getTopRatingMovies(MoviesData));

export function getTrendingMovies(movies) {
  return movies
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 10)
    .map((movie) => ({ ...movie /*isTrending: true*/ }));
}
// console.log(getTrendingMovies(MoviesData));

export function getLatestMovies(movies) {
  return movies
    .filter((movie) => {
      const releaseDate = new Date(movie.releaseDate);
      const currentDate = new Date();
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(currentDate.getMonth() - 12); //mengambil data film yang dirilis dalam 24 bulan terakhir
      return releaseDate >= oneMonthAgo && releaseDate <= currentDate;
    })
    .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
}
// console.log(getLatestMovies(MoviesData));

export function getContinueWatchingMovies(movies) {
  return movies.filter((movie) => movie.watchTime > 0);
}
// console.log(getContinueWatchingMovies(MoviesData));
