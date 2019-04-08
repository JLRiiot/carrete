import * as _ from 'lodash';
import { addItemToArray, removeItemFromArray } from '../../Util';
import { Movie } from '../State/StoreModel';

const defaultQs = { api_key: '598d1b35439c46b18d2ce4d843016e23', language: 'en-US', page: '1', include_adult: 'false' };

const search = async (search: string, page: number = 1): Promise<Movie[]> => {
  const qs = { ...defaultQs, query: search, page: page };
  let result = await http<Movie[]>(`https://api.themoviedb.org/3/search/movie?${getParams(qs)}`);

  return Promise.resolve(result);
};

const getTrending = async (): Promise<Movie[]> => {
  const qs = { ...defaultQs };
  let result = await http<Movie[]>(`https://api.themoviedb.org/3/trending/all/day?${getParams(qs)}`);

  return result;
};

const toggleFavorite = (movie: Movie): Movie => toggleItemInPlaylist(movie, 'favorite');
const toggleWatchLater = (movie: Movie): Movie => toggleItemInPlaylist(movie, 'watchlater');
const getFavoriteMovies = (): { movies: Movie[]; index: number[] } => getItemsInPlayList('favorite');
const getWatchLaterMovies = (): { movies: Movie[]; index: number[] } => getItemsInPlayList('watchlater');

const toggleItemInPlaylist = (movie: Movie, key: string): Movie => {
  let fiString = localStorage.getItem(`${key}Index`);
  let fIndex: number[] = fiString ? JSON.parse(fiString) : [];

  let fmString = localStorage.getItem(`${key}Movies`);
  let fMovies: Movie[] = fmString ? JSON.parse(fmString) : [];

  let add = fIndex.indexOf(movie.id) < 0;

  let newIndex, newMovies;
  if (add) {
    newIndex = addItemToArray(movie.id, fIndex);
    newMovies = addItemToArray(movie, fMovies);
  } else {
    newIndex = removeItemFromArray(movie.id, fIndex, (value: number) => value !== movie.id);
    newMovies = removeItemFromArray(movie, fMovies, (value: Movie) => value.id !== movie.id);
  }

  localStorage.setItem(`${key}Index`, JSON.stringify(newIndex));
  localStorage.setItem(`${key}Movies`, JSON.stringify(newMovies));

  return movie;
};

const getItemsInPlayList = (key: string): { movies: Movie[]; index: number[] } => {
  let moviesString = localStorage.getItem(`${key}Movies`);
  let movies: Movie[] = moviesString ? JSON.parse(moviesString) : [];
  let indexString = localStorage.getItem(`${key}Index`);
  let index: number[] = indexString ? JSON.parse(indexString) : [];

  return { movies, index };
};

const http = <T>(request: RequestInfo): Promise<T> => {
  return new Promise((resolve) => {
    fetch(request)
      .then((response) => response.json())
      .then((body) => {
        resolve(body);
      });
  });
};

const getParams = (queryParams: any) =>
  _.transform(
    queryParams,
    function(result: string[], value: string, key) {
      result.push(`${key}=${encodeURIComponent(value)}`);
    },
    []
  ).join('&');

export const movieApi = {
  search,
  getTrending,
  toggleFavorite,
  toggleWatchLater,
  getFavoriteMovies,
  getWatchLaterMovies
};
export type MovieApi = typeof movieApi;
