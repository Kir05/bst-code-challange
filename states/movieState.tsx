import axios from "axios";
import create from "zustand";

import { Movie } from "../types/MovieTypes";

interface MovieState {
  movies: Movie[];
  getMovies: () => void;
  createMovie: (movie: Movie) => void;
  editMovie: (movie: Movie) => void;
  removeMovie: (movie: Movie) => void;
}

const useMovieState = create<MovieState>((set) => ({
  movies: [],

  getMovies: async () => {
    const res = await axios.get(
      "https://gist.githubusercontent.com/bstech-ux/e717b74dbd7cc95a8429eadc83a5c882/raw/ca85214d461ef93c316a47a6770c4b9ba678a6b3/movies.json"
    );
    set({ movies: await res.data });
  },

  createMovie: (movie) =>
    set((state) => ({ movies: [...state.movies, movie] })),

  editMovie: (movie) => {
    set((state) => ({
      movies: state.movies.map((el: Movie) => {
        if (el.id == movie.id) {
          console.log("Found");
          return {
            ...el,
            title: movie.title,
            director: movie.director,
            distributor: movie.distributor,
            imdb_rating: movie.imdb_rating,
            imdb_votes: movie.imdb_votes,
          };
        } else {
          return el;
        }
      }),
    }));
  },

  removeMovie: (movie) =>
    set((state) => ({
      movies: state.movies.filter((el) => el.id !== movie.id),
    })),
}));

export default useMovieState;
