import {
  ADD_FAVORITE,
  CLEAR_MOVIES,
  LOAD_MOVIES,
  REMOVE_FAVORITE
  } from './Events';
import { Movie } from './StoreModel';

export type LoadMovies = {
  type: LOAD_MOVIES;
  payload: Movie[];
};

export type ClearMovies = {
  type: CLEAR_MOVIES;
};

export type AddFavorite = {
  type: ADD_FAVORITE;
  payload: number;
};

export type RemoveFavorite = {
  type: REMOVE_FAVORITE;
  payload: number;
};

export const loadMovies = (movies: Movie[]): LoadMovies => ({
  type: LOAD_MOVIES,
  payload: movies
});

export const clearMovies = (): ClearMovies => ({
  type: CLEAR_MOVIES
});

export const addFavorite = (id: number) => ({
  type: ADD_FAVORITE,
  payload: id
});

export type MovieActions = LoadMovies | ClearMovies | AddFavorite | RemoveFavorite;
