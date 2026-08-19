import { useState, useEffect } from "react";
import HeroBanner from "../components/HeroBanner.jsx";
import Navbar from "../components/Navbar.jsx";
import featuredBg from "../assets/cover/dutyafterschool.png";
import Footer from "../components/Footer.jsx";

//import MovieCard from '../components/MovieCard.jsx';
import MovieRow from "../components/MovieRow.jsx";
// import MovieCardPortrait from '../components/MovieCardPortrait.jsx';

// OLD DATA
// import { moviesData } from '../data/movies';
// import { topTrending } from '../data/movies';
// import { moviesTrending } from '../data/movies';

// NEW DATA

import { getMovies } from "../services/api/movieApi.js";

import { MoviesData } from "../data/moviesData.js";
import {
  getTopRatingMovies,
  getTrendingMovies,
  getLatestMovies,
  getContinueWatchingMovies,
} from "../data/moviesFilters.js";

function Home() {
  const [movies, setMovies] = useState(MoviesData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function fetchMovies() {
      try {
        const response = await getMovies();
        if (mounted) {
          setMovies(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Failed to load movies:", error);
      }
    }
    fetchMovies();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-bg-home text-white font-sans overflow-x-hidden">
      {/* Melayang independen di atas banner */}
      <Navbar />

      {/* Menempel tepat dari ujung atas layar */}
      <HeroBanner
        judul="Duty After School"
        deskripsi="Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang."
        backgroundImage={featuredBg}
        ratingUsia="18+"
      />

      <div className="relative z-20">
        <MovieRow
          title="Continue Watching"
          movies={getContinueWatchingMovies(movies)}
          imageField="still"
        />
        <MovieRow
          title="Top Rating Film dan Series Hari ini"
          movies={getTopRatingMovies(movies)}
          imageField="poster"
        />
        <MovieRow
          title="Latest Released"
          movies={getLatestMovies(movies)}
          imageField="poster"
        />
        <MovieRow
          title="Trending Now"
          movies={getTrendingMovies(movies)}
          imageField="poster"
        />

        <Footer />
      </div>
    </div>
  );
}

export default Home;
