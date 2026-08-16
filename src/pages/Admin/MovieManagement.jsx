import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMovies } from '../../services/api/movieApi.js';
import { isAdminLoggedIn } from '../../utils/adminAuth.js';

const INITIAL_FORM = {
  id: null,
  title: '',
  releaseDate: '',
  poster: '',
  backdrop: '',
  still: '',
  rating: 5,
  duration: '',
  genre: [],
  ageRating: '18+',
  description: '',
  isTrending: false,
  isTop10: false,
  watchTime: 0
};

const GENRE_OPTIONS = ['Action', 'Drama', 'Horror', 'Comedy', 'Thriller', 'Superhero', 'Suspense', 'Romance', 'Animation', 'Psychological', 'Fighting'];
const AGE_RATING_OPTIONS = ['13+', '17+', '18+', '21+', 'All Ages'];

function MovieManagement() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  if (!isAdminLoggedIn()) {
    navigate('/admin/login');
    return null;
  }

  useEffect(() => {
    getMovies()
    .then((response)=>{setMovies(response.data);
    })
    .catch((error)=>{console.error(error);
    });
},[]);

  // const loadMovies = () => {
  //   const stored = localStorage.getItem('movies');
  //   if (stored) {
  //     setMovies(JSON.parse(stored));
  //   }
  // };

  const saveMovies = (updatedMovies) => {
    localStorage.setItem('movies', JSON.stringify(updatedMovies));
    setMovies(updatedMovies);
  };

  const handleAddMovie = () => {
    setFormData({ ...INITIAL_FORM, id: Date.now() });
    setShowForm(true);
  };

  const handleEditMovie = (movie) => {
    setFormData(movie);
    setShowForm(true);
  };

  const handleDeleteClick = (movieId) => {
    setDeleteConfirm(movieId);
  };

  const handleConfirmDelete = () => {
    const updated = movies.filter(m => m.id !== deleteConfirm);
    saveMovies(updated);
    setDeleteConfirm(null);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? parseFloat(value) : value
    }));
  };

  const handleGenreToggle = (genre) => {
    setFormData(prev => ({
      ...prev,
      genre: prev.genre.includes(genre)
        ? prev.genre.filter(g => g !== genre)
        : [...prev.genre, genre]
    }));
  };

  const validateForm = () => {
    if (!formData.title.trim() || formData.title.length < 3) return 'Title must be at least 3 characters';
    if (!formData.releaseDate) return 'Release date is required';
    if (!formData.poster.trim()) return 'Poster filename is required';
    if (!formData.backdrop.trim()) return 'Backdrop filename is required';
    if (!formData.still.trim()) return 'Still filename is required';
    if (formData.rating < 1 || formData.rating > 5) return 'Rating must be between 1-5';
    if (!formData.duration.trim()) return 'Duration is required';
    if (formData.genre.length === 0) return 'Select at least one genre';
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      alert(error);
      return;
    }

    const updated = formData.id && movies.some(m => m.id === formData.id)
      ? movies.map(m => m.id === formData.id ? formData : m)
      : [...movies, formData];

    saveMovies(updated);
    setShowForm(false);
    setFormData(INITIAL_FORM);
  };

  return (
    <div className="min-h-screen bg-bg-home text-white font-sans">
      <nav className="bg-paper border-b border-gray-700 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Movies Management</h1>
        <button
          onClick={() => navigate('/admin/dashboard')}
          className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded transition duration-200"
        >
          Back
        </button>
      </nav>

      <div className="p-6">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={handleAddMovie}
            className="mb-6 px-4 py-2 bg-green-600 hover:bg-green-700 rounded transition duration-200 font-semibold"
          >
            + Add Movie
          </button>

          {/* Movies List */}
          <div className="grid grid-cols-1 gap-4">
            {movies.length === 0 ? (
              <p className="text-gray-400 text-center py-8">No movies yet. Add one to get started.</p>
            ) : (
              movies.map(movie => (
                <div key={movie.id} className="bg-paper rounded-lg p-4 border border-gray-700 flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-lg">{movie.title}</h3>
                    <p className="text-sm text-gray-400">Rating: {movie.rating} ⭐ | {movie.genre.join(', ')}</p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditMovie(movie)}
                      className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-sm transition duration-200"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(movie.id)}
                      className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded text-sm transition duration-200"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-paper rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="bg-paper border-b border-gray-700 px-6 py-4 flex justify-between items-center sticky top-0">
              <h2 className="text-xl font-bold">{formData.id && movies.some(m => m.id === formData.id) ? 'Edit' : 'Add'} Movie</h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-2xl hover:text-gray-400"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="col-span-2 px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                  required
                />

                <input
                  type="date"
                  name="releaseDate"
                  value={formData.releaseDate}
                  onChange={handleInputChange}
                  className="px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                  required
                />

                <input
                  type="number"
                  name="rating"
                  placeholder="Rating (1-5)"
                  min="1"
                  max="5"
                  step="0.1"
                  value={formData.rating}
                  onChange={handleInputChange}
                  className="px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                  required
                />

                <input
                  type="text"
                  name="poster"
                  placeholder="Poster filename (e.g., movie.jpg)"
                  value={formData.poster}
                  onChange={handleInputChange}
                  className="px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                  required
                />

                <input
                  type="text"
                  name="backdrop"
                  placeholder="Backdrop filename"
                  value={formData.backdrop}
                  onChange={handleInputChange}
                  className="px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                  required
                />

                <input
                  type="text"
                  name="still"
                  placeholder="Still filename"
                  value={formData.still}
                  onChange={handleInputChange}
                  className="px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                  required
                />

                <input
                  type="text"
                  name="duration"
                  placeholder="Duration (e.g., 120 min)"
                  value={formData.duration}
                  onChange={handleInputChange}
                  className="px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                  required
                />

                <select
                  name="ageRating"
                  value={formData.ageRating}
                  onChange={handleInputChange}
                  className="px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                >
                  {AGE_RATING_OPTIONS.map(opt => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>

                <input
                  type="number"
                  name="watchTime"
                  placeholder="Watch time (hours)"
                  min="0"
                  step="0.1"
                  value={formData.watchTime}
                  onChange={handleInputChange}
                  className="px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 focus:outline-none"
                />

                <textarea
                  name="description"
                  placeholder="Description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="col-span-2 px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 focus:outline-none h-20 resize-none"
                />
              </div>

              {/* Genre Checkboxes */}
              <div>
                <p className="font-semibold mb-2">Genres</p>
                <div className="grid grid-cols-3 gap-2">
                  {GENRE_OPTIONS.map(genre => (
                    <label key={genre} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.genre.includes(genre)}
                        onChange={() => handleGenreToggle(genre)}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">{genre}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Checkboxes */}
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="isTrending"
                    checked={formData.isTrending}
                    onChange={handleInputChange}
                    className="w-4 h-4"
                  />
                  <span>Trending</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="isTop10"
                    checked={formData.isTop10}
                    onChange={handleInputChange}
                    className="w-4 h-4"
                  />
                  <span>Top 10</span>
                </label>
              </div>

              <div className="flex gap-2 justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded transition duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition duration-200 font-semibold"
                >
                  {formData.id && movies.some(m => m.id === formData.id) ? 'Update' : 'Add'} Movie
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {deleteConfirm !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-paper rounded-lg p-6 max-w-sm">
            <h3 className="text-lg font-bold mb-4">Delete Movie?</h3>
            <p className="text-gray-400 mb-6">This action cannot be undone.</p>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded transition duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded transition duration-200 font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieManagement;
