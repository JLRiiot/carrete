import { MovieActions } from './Actions';
import { CLEAR_MOVIES, LOAD_MOVIES, TOGGLE_FAVORITE } from './Events';
import { MoviesStore } from './StoreModel';

export const defaultState: MoviesStore = {
  movies: [],
  favoritesIDs: [],
  favoriteMovies: []
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
          ? [...state.favoritesIDs, action.payload.id]
          : state.favoritesIDs.splice(state.favoritesIDs.indexOf(index), 1),
        favoriteMovies: add ? [...state.favoriteMovies, action.payload] : state.favoriteMovies.splice(index, 1)
      };
    default:
      return state;
  }
};
