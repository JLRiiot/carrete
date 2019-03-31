import { MovieActions } from './Actions';
import { CLEAR_MOVIES, LOAD_MOVIES } from './Events';
import { MoviesStore } from './StoreModel';

const defaultState: MoviesStore = {
  movies: []
};

export const moviesReducer = (state: MoviesStore = defaultState, action: MovieActions): MoviesStore => {
  switch (action.type) {
    case LOAD_MOVIES:
      return { ...state, movies: action.payload };
    case CLEAR_MOVIES:
      return { ...state, movies: [] };
    default:
      return state;
  }
};
