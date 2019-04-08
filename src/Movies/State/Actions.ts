import { Dispatch } from 'redux';
import { DependencyInjectionContainer } from '../../Host/Application/DependencyInjection';
import {
  CLEAR_SEARCH_RESULTS,
  LOAD_FAVORITE_MOVIES,
  LOAD_FAVORITE_MOVIES_INDEX,
  LOAD_SEARCH_RESULTS,
  LOAD_TRENDING_MOVIES,
  LOAD_WATCH_LATER,
  LOAD_WATCH_LATER_INDEX,
  TOGGLE_FAVORITE,
  TOGGLE_WATCH_LATER
  } from './Events';
import { Movie } from './StoreModel';

export type LoadSearchResults = {
  type: LOAD_SEARCH_RESULTS;
  payload: Movie[];
};
export type LoadFavoriteMovies = {
  type: LOAD_FAVORITE_MOVIES;
  payload: Movie[];
};
export type LoadWatchLater = {
  type: LOAD_WATCH_LATER;
  payload: Movie[];
};
export type LoadTrendingMovies = {
  type: LOAD_TRENDING_MOVIES;
  payload: Movie[];
};

export type ClearSearchResults = {
  type: CLEAR_SEARCH_RESULTS;
};

export type ToggleFavorite = {
  type: TOGGLE_FAVORITE;
  payload: Movie;
};

export type ToggleWatchLater = {
  type: TOGGLE_WATCH_LATER;
  payload: Movie;
};

export type LoadFavoriteMoviesIndex = {
  type: LOAD_FAVORITE_MOVIES_INDEX;
  payload: number[];
};

export type LoadWatchLaterMoviesIndex = {
  type: LOAD_WATCH_LATER_INDEX;
  payload: number[];
};

export const loadSearchResults = (movies: Movie[]): LoadSearchResults => ({
  type: LOAD_SEARCH_RESULTS,
  payload: movies
});
export const loadFavoriteMovies = (movies: Movie[]): LoadFavoriteMovies => ({
  type: LOAD_FAVORITE_MOVIES,
  payload: movies
});
export const loadWatchLater = (movies: Movie[]): LoadWatchLater => ({
  type: LOAD_WATCH_LATER,
  payload: movies
});
export const loadTrendingMovies = (movies: Movie[]): LoadTrendingMovies => ({
  type: LOAD_TRENDING_MOVIES,
  payload: movies
});

export const clearMovies = (): ClearSearchResults => ({
  type: CLEAR_SEARCH_RESULTS
});

export const toggleFavorite = (movie: Movie) => ({
  type: TOGGLE_FAVORITE,
  payload: movie
});

export const toggleWatchLater = (movie: Movie): ToggleWatchLater => ({
  type: TOGGLE_WATCH_LATER,
  payload: movie
});

export const loadFavoriteMoviesIndex = (index: number[]): LoadFavoriteMoviesIndex => ({
  type: LOAD_FAVORITE_MOVIES_INDEX,
  payload: index
});

export const loadWatchLaterMoviesIndex = (index: number[]): LoadWatchLaterMoviesIndex => ({
  type: LOAD_WATCH_LATER_INDEX,
  payload: index
});

export const loadTrendingRequest = () => (
  dispatch: Dispatch,
  getState: Function,
  { container }: { container: DependencyInjectionContainer }
) => {
  container
    .getTrending()
    .then((result: any) => dispatch(loadTrendingMovies(result.results)))
    .catch((error) => console.log(error));
};

export const loadFavoriteMoviesRequest = () => (
  dispatch: Dispatch,
  getState: Function,
  { container }: { container: DependencyInjectionContainer }
) => {
  let { movies, index } = container.getFavorites();
  dispatch(loadFavoriteMoviesIndex(index));
  dispatch(loadFavoriteMovies(movies));
};

export const loadWatchLaterRequest = () => (
  dispatch: Dispatch,
  getState: Function,
  { container }: { container: DependencyInjectionContainer }
) => {
  let { movies, index } = container.getWatchLater();
  dispatch(loadWatchLaterMoviesIndex(index));
  dispatch(loadWatchLater(movies));
};

export const toggleFavoriteRequest = (movie: Movie) => (
  dispatch: Dispatch,
  getState: Function,
  { container }: { container: DependencyInjectionContainer }
) => {
  dispatch(toggleFavorite(movie));
  container.toggleFavorites(movie);
};
export const toggleWatchLaterRequest = (movie: Movie) => (
  dispatch: Dispatch,
  getState: Function,
  { container }: { container: DependencyInjectionContainer }
) => {
  dispatch(toggleWatchLater(movie));
  container.toggleWatchLater(movie);
};

export type MovieActions =
  | LoadSearchResults
  | ClearSearchResults
  | ToggleFavorite
  | LoadFavoriteMovies
  | LoadTrendingMovies
  | LoadWatchLater
  | ToggleWatchLater
  | LoadFavoriteMoviesIndex
  | LoadWatchLaterMoviesIndex;
