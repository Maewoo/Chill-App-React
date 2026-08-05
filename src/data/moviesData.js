const DEFAULT_MOVIES = [
  {
    id: 1,
    title: "Duty After School",
    releaseDate: "2020-01-01",
    poster: "duty-after-school.png",
    backdrop: "duty-after-school-backdrop.png",
    still: "duty-after-school-still.png",
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
    backdrop: "the-batman-backdrop.png",
    still: "the-batman.png",
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
    poster: "sonic-hedgehog-2.png",
    backdrop: "sonic-hedgehog-2-backdrop.png",
    still: "sonic-hedgehog-2.png",
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
    title: "Backrooms",
    releaseDate: "2026-06-01",
    poster: "backrooms.png",
    backdrop: "backrooms-backdrop.png",
    still: "backrooms-still.png",
    isTrending: false,
    isTop10: true,
    watchTime: 0,
    rating: 4.8,
    genre: ["Horror", "Suspense"],
    duration: "95 min",
    description: "Jangan masuki ruangan yang salah.",
    ageRating: "18+",
  },
  {
    id: 5,
    title: "Undertone",
    releaseDate: "2026-06-22",
    poster: "undertone.png",
    backdrop: "undertone-backdrop.png",
    still: "undertone-still.png",
    isTrending: true,
    isTop10: true,
    watchTime: 0.5,
    rating: 4.8,
    genre: ["Horror", "Suspense", "Psychological"],
    duration: "108 min",
    description: "Misteri yang mengguncang jiwa.",
    ageRating: "18+",
  },
  {
    id: 6,
    title: "Spider-Man: Brand New Day",
    releaseDate: "2026-07-23",
    poster: "spiderman-bnd.png",
    backdrop: "spiderman-bnd-backdrop.png",
    still: "spiderman-bnd-still.png",
    isTrending: true,
    isTop10: true,
    watchTime: 0,
    rating: 4.9,
    genre: ["Fighting", "Action", "Superhero"],
    duration: "150 min",
    description: "Spider-Man menghadapi ancaman baru.",
    ageRating: "17+",
  },
];

export function getMoviesData() {
  const stored = localStorage.getItem('movies');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      console.error('Failed to parse movies from localStorage:', e);
      return DEFAULT_MOVIES;
    }
  }
  // Initialize localStorage with defaults on first load
  localStorage.setItem('movies', JSON.stringify(DEFAULT_MOVIES));
  return DEFAULT_MOVIES;
}

export const MoviesData = getMoviesData();
