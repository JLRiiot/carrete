import { AnyAction, Dispatch } from 'redux';
import { DependencyInjectionContainer } from '../../Host/Application/DependencyInjection';
import { CLEAR_MOVIES, LOAD_MOVIES, TOGGLE_FAVORITE } from './Events';
import { Movie } from './StoreModel';

export type LoadMovies = {
  type: LOAD_MOVIES;
  payload: Movie[];
};

export type ClearMovies = {
  type: CLEAR_MOVIES;
};

export type ToggleFavorite = {
  type: TOGGLE_FAVORITE;
  payload: Movie;
};

export const loadMovies = (movies: Movie[]): LoadMovies => ({
  type: LOAD_MOVIES,
  payload: movies
});

export const clearMovies = (): ClearMovies => ({
  type: CLEAR_MOVIES
});

export const toggleFavorite = (movie: Movie) => ({
  type: TOGGLE_FAVORITE,
  payload: movie
});

export const loadTrending = () => (
  dispatch: Dispatch,
  getState: Function,
  { container }: { container: DependencyInjectionContainer }
) => {
  container
    .getTrending()
    .then((result: any) => dispatch(loadMovies(result.results)))
    .catch((error) => console.log(error));
};

export type MovieActions = LoadMovies | ClearMovies | ToggleFavorite;
