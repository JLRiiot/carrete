import { CLEAR_MOVIES, LOAD_MOVIES } from './Events';
import { Movie } from './StoreModel';

export type LoadMovies = {
  type: LOAD_MOVIES;
  payload: Movie[];
};

export type ClearMovies = {
  type: CLEAR_MOVIES;
};

export const loadMovies = (movies: Movie[]): LoadMovies => ({
  type: LOAD_MOVIES,
  payload: movies
});

export const clearMovies = (): ClearMovies => ({
  type: CLEAR_MOVIES
});

export type MovieActions = LoadMovies | ClearMovies;
