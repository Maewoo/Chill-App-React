import HeroBanner from '../components/HeroBanner.jsx';
import Navbar from '../components/Navbar.jsx';
import featuredBg from '../assets/cover/dutyafterschool.png';
import Footer from '../components/Footer.jsx';

import MovieCard from '../components/MovieCard.jsx';
import MovieRow from '../components/MovieRow.jsx';
import MovieCardPortrait from '../components/MovieCardPortrait.jsx';

// DATA
import { moviesData } from '../data/movies';
import { topTrending } from '../data/movies';
import { moviesTrending } from '../data/movies';

function Home() {
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
        
        {/* Kategori 1: Melanjutkan Tonton Film */}
        <MovieRow categoryTitle="Melanjutkan Tonton Film">
        {moviesData.map((item) => (
          <MovieCard 
            key={item.id}
            image={item.image} 
            title={item.title}
            rating={item.rating}
            isNew={item.isNew}
            isTop10={item.isTop10}
          />
        ))}
        </MovieRow>
      </div>
      <MovieRow categoryTitle="Top Rating Film dan Series Hari Ini">
            {topTrending.map((item) => (
                <MovieCardPortrait 
                  key={item.id}
                  image={item.image} 
                  title={item.title}
                  rating={item.rating}
                  isNew={item.isNew}
                  isTop10={item.isTop10}
                />
            ))}
        </MovieRow>
        <MovieRow categoryTitle="Film Trending">
          {moviesTrending.map((item) => (
            <MovieCardPortrait 
              key={item.id}
              image={item.image} 
              title={item.title}
              rating={item.rating}
              isNew={item.isNew}
              isTop10={item.isTop10}
            />
          ))}
        </MovieRow>
        <Footer />
    </div>
    
  );
}

export default Home;