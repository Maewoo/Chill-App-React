import axiosClient from "./axiosClient";

export const getMovies = () => {
  return axiosClient.get("/movies");
};

export const addMovie = (movieData) => {
  return axiosClient.post("/movies", movieData);
};
export const updateMovie = (id, movieData) => {
  return axiosClient.put(`/movies/${id}`, movieData);
};
export const deleteMovie = (id) => {
  return axiosClient.delete(`/movies/${id}`);
};
