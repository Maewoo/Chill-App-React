import axiosClient from "./axiosClient";

export const getMovies = () => { return axiosClient.get("/movies"); };

export const addMovie = (movie) => { return axiosClient.post("/movies", movie); };

export const updateMovie = (id, movie) => { return axiosClient.put(`/movies/${id}`, movie); };

export const deleteMovie = (id) => { return axiosClient.delete(`/movies/${id}`); };