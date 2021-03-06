import { addItemToArray, removeItemFromArray } from '../../Util';
import { MovieActions } from './Actions';
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
import { Movie, MoviesStore } from './StoreModel';

export const defaultState: MoviesStore = {
  favoriteMovies: [],
  favoritesIndex: [],
  searchResults: [],
  trendingMovies: [],
  watchLaterIndex: [],
  watchLaterMovies: []
};

export const moviesReducer = (state: MoviesStore = defaultState, action: MovieActions): MoviesStore => {
  switch (action.type) {
    case LOAD_SEARCH_RESULTS:
      return { ...state, searchResults: action.payload };
    case CLEAR_SEARCH_RESULTS:
      return { ...state, searchResults: [] };
    case TOGGLE_FAVORITE:
      const index = state.favoritesIndex.indexOf(action.payload.id);
      const add = index < 0;
      return {
        ...state,
        favoriteMovies: add
          ? addItemToArray(action.payload, state.favoriteMovies)
          : removeItemFromArray(action.payload, state.favoriteMovies, (value: Movie) => value.id !== action.payload.id),
        favoritesIndex: add
          ? addItemToArray(action.payload.id, state.favoritesIndex)
          : removeItemFromArray(action.payload.id, state.favoritesIndex, (value) => value !== action.payload.id)
      };
    case LOAD_FAVORITE_MOVIES:
      return { ...state, favoriteMovies: action.payload };
    case LOAD_WATCH_LATER:
      return { ...state, watchLaterMovies: action.payload };
    case LOAD_TRENDING_MOVIES:
      return { ...state, trendingMovies: action.payload };
    case TOGGLE_WATCH_LATER:
      const indexWL = state.watchLaterIndex.indexOf(action.payload.id);
      const addWL = indexWL < 0;

      return {
        ...state,
        watchLaterIndex: addWL
          ? addItemToArray(action.payload.id, state.watchLaterIndex)
          : removeItemFromArray(action.payload.id, state.watchLaterIndex, (value) => value !== action.payload.id),
        watchLaterMovies: addWL
          ? addItemToArray(action.payload, state.watchLaterMovies)
          : removeItemFromArray(
              action.payload,
              state.watchLaterMovies,
              (value: Movie) => value.id !== action.payload.id
            )
      };
    case LOAD_FAVORITE_MOVIES_INDEX:
      return { ...state, favoritesIndex: action.payload };
    case LOAD_WATCH_LATER_INDEX:
      return { ...state, watchLaterIndex: action.payload };

    default:
      return state;
  }
};
