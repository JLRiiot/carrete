export interface Movie {
  vote_count: number;
  id: number;
  video: boolean;
  vote_average: number;
  title: string;
  name?: string;
  popularity: number;
  poster_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  backdrop_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
}

export interface MoviesStore {
  searchResults: Movie[];
  favoritesIndex: number[];
  favoriteMovies: Movie[];
  watchLaterIndex: number[];
  watchLaterMovies: Movie[];
  trendingMovies: Movie[];
}
