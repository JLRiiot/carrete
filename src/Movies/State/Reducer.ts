import { MovieActions } from './Actions';
import {
  CLEAR_SEARCH_RESULTS,
  LOAD_FAVORITE_MOVIES,
  LOAD_SEARCH_RESULTS,
  LOAD_TRENDING_MOVIES,
  LOAD_WATCH_LATER,
  TOGGLE_FAVORITE
  } from './Events';
import { Movie, MoviesStore } from './StoreModel';

export const defaultState: MoviesStore = {
  searchResults: [],
  favoritesIndex: [],
  favoriteMovies: [],
  watchLaterIndex: [],
  watchLaterMovies: [],
  trendingMovies: []
};

const addItemToArray = <T>(item: T, original: T[]): T[] => {
  let newArray = original.slice();
  newArray.splice(newArray.length - 1, 0, item);
  return newArray;
};

const removeItemFromArray = <T>(
  item: T,
  originalArray: T[],
  matchFunction: (value: T, index?: number, array?: T[]) => boolean
): T[] => {
  return originalArray.filter(matchFunction);
};

export const moviesReducer = (state: MoviesStore = defaultState, action: MovieActions): MoviesStore => {
  switch (action.type) {
    case LOAD_SEARCH_RESULTS:
      return { ...state, searchResults: action.payload };
    case CLEAR_SEARCH_RESULTS:
      return { ...state, searchResults: [] };
    case TOGGLE_FAVORITE:
      const index = state.favoritesIndex.indexOf(action.payload.id),
        add = index < 0;
      return {
        ...state,
        favoritesIndex: add
          ? addItemToArray(action.payload.id, state.favoritesIndex)
          : removeItemFromArray(action.payload.id, state.favoritesIndex, (value) => value !== action.payload.id),
        favoriteMovies: add
          ? addItemToArray(action.payload, state.favoriteMovies)
          : removeItemFromArray(action.payload, state.favoriteMovies, (value: Movie) => value.id !== action.payload.id)
      };
    case LOAD_FAVORITE_MOVIES:
      return { ...state, favoriteMovies: action.payload };
    case LOAD_WATCH_LATER:
      return { ...state, watchLaterMovies: action.payload };
    case LOAD_TRENDING_MOVIES:
      return { ...state, trendingMovies: action.payload };

    default:
      return state;
  }
};
