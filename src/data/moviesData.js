const DEFAULT_MOVIES = [
  {
    id: 1,
    title: "Duty After School",
    releaseDate: "2020-01-01",
    poster: "duty-after-school.png",
    backdrop: "duty-after-school.png",
    still: "duty-after-school.png",
    isTrending: false,
    isTop10: false,
    watchTime: 0.2,
    rating: 4.5,
    genre: ["Drama", "Action"],
    duration: "120 min",
    description: "Sebuah benda tak dikenal mengambil alih dunia.",
    ageRating: "18+",
  },
  {
    id: 2,
    title: "The Batman",
    releaseDate: "2022-02-01",
    poster: "the-batman.png",
    backdrop: "the-batman.png",
    still: "batman.png",
    isTrending: true,
    isTop10: false,
    watchTime: 0.2,
    rating: 4.5,
    genre: ["Fighting", "Action"],
    duration: "180 min",
    description: "Seorang detektif memecahkan misteri kejahatan.",
    ageRating: "17+",
  },
  {
    id: 3,
    title: "Sonic the Hedgehog 2",
    releaseDate: "2023-02-01",
    poster: "sonic-the-hedgedog.png",
    backdrop: "sonic-the-hedgedog.png",
    still: "sonic.png",
    isTrending: false,
    isTop10: false,
    watchTime: 0,
    rating: 4.5,
    genre: ["Fighting", "Action"],
    duration: "139 min",
    description: "Sonic kembali untuk petualangan baru.",
    ageRating: "13+",
  },
  {
    id: 4,
    title: "Black Adam",
    releaseDate: "2026-06-01",
    poster: "black-adam.png",
    backdrop: "black-adam.png",
    still: "black-adam.png",
    isTrending: false,
    isTop10: true,
    watchTime: 0,
    rating: 4.8,
    genre: ["Horror", "Suspense"],
    duration: "95 min",
    description: "Pahlawan baru muncul dengan kekuatan luar biasa.",
    ageRating: "18+",
  },
  {
    id: 5,
    title: "Doctor Strange",
    releaseDate: "2026-06-22",
    poster: "doctor-strange.png",
    backdrop: "doctor-strange.png",
    still: "doctor-strange.png",
    isTrending: true,
    isTop10: true,
    watchTime: 0.5,
    rating: 4.8,
    genre: ["Horror", "Suspense", "Psychological"],
    duration: "108 min",
    description: "Perjalanan ke dimensi lain dimulai.",
    ageRating: "18+",
  },
  {
    id: 6,
    title: "Spider-Man: Spiderverse",
    releaseDate: "2026-07-23",
    poster: "spidermanbnd-portrait.jpg",
    backdrop: "spiderman-spiderverse.png",
    still: "spiderman-spiderverse.png",
    isTrending: true,
    isTop10: true,
    watchTime: 0,
    rating: 4.9,
    genre: ["Fighting", "Action", "Superhero"],
    duration: "150 min",
    description: "Spider-Man menghadapi ancaman dari dimensi lain.",
    ageRating: "17+",
  },
];

export function getMoviesData() {
  const stored = localStorage.getItem("movies");
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error("Failed to parse movies from localStorage:", e);
      return DEFAULT_MOVIES;
    }
  }
  // Initialize localStorage with defaults on first load
  localStorage.setItem("movies", JSON.stringify(DEFAULT_MOVIES));
  return DEFAULT_MOVIES;
}

export const MoviesData = getMoviesData();
