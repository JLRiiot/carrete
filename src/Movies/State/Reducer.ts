import { MovieActions } from './Actions';
import {
  ADD_FAVORITE,
  CLEAR_MOVIES,
  LOAD_MOVIES,
  REMOVE_FAVORITE
  } from './Events';
import { MoviesStore } from './StoreModel';

export const defaultState: MoviesStore = {
  movies: [],
  favoritesIDsHack: []
};

export const moviesReducer = (state: MoviesStore = defaultState, action: MovieActions): MoviesStore => {
  switch (action.type) {
    case LOAD_MOVIES:
      return { ...state, movies: action.payload };
    case CLEAR_MOVIES:
      return { ...state, movies: [] };
    case ADD_FAVORITE:
      return {
        ...state,
        favoritesIDsHack: [...state.favoritesIDsHack, action.payload]
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favoritesIDsHack: state.favoritesIDsHack.splice(state.favoritesIDsHack.indexOf(action.payload), 1)
      };
    default:
      return state;
  }
};
