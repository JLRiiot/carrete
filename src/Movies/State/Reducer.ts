import { MovieActions } from './Actions';
import { CLEAR_MOVIES, LOAD_MOVIES, TOGGLE_FAVORITE } from './Events';
import { MoviesStore } from './StoreModel';

export const defaultState: MoviesStore = {
  movies: [],
  favoritesIDs: [],
  favoriteMovies: []
};

const addItemToArray = <T>(item: T, original: T[]): T[] => {
  let newArray = original.slice();
  newArray.splice(newArray.length - 1, 0, item);
  return newArray;
};

const removeItemFromArray = <T>(item: T, originalArray: T[]): T[] => {
  let newArray = originalArray.slice();
  newArray.splice(newArray.indexOf(item), 1);
  return newArray;
};

export const moviesReducer = (state: MoviesStore = defaultState, action: MovieActions): MoviesStore => {
  switch (action.type) {
    case LOAD_MOVIES:
      return { ...state, movies: action.payload };
    case CLEAR_MOVIES:
      return { ...state, movies: [] };
    case TOGGLE_FAVORITE:
      const index = state.favoritesIDs.indexOf(action.payload.id),
        add = index < 0;
      return {
        ...state,
        favoritesIDs: add
          ? addItemToArray(action.payload.id, state.favoritesIDs)
          : removeItemFromArray(action.payload.id, state.favoritesIDs),
        favoriteMovies: add
          ? addItemToArray(action.payload, state.favoriteMovies)
          : removeItemFromArray(action.payload, state.favoriteMovies)
      };
    default:
      return state;
  }
};
