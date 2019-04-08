import createGetFavorites from '../../Movies/Application/GetFavorites';
import createGetMovies from '../../Movies/Application/GetMovies';
import createGetTrending from '../../Movies/Application/GetTrending';
import createGetWatchLater from '../../Movies/Application/GetWatchLater';
import createToggleFavorite from '../../Movies/Application/ToggleFavorite';
import createToggleWatchLater from '../../Movies/Application/ToggleWatchLater';
import { movieApi } from '../../Movies/Infrastructure/MovieApi';

const getMovies = createGetMovies({ api: movieApi });
const getTrending = createGetTrending({ api: movieApi });
const getFavorites = createGetFavorites({ api: movieApi });
const getWatchLater = createGetWatchLater({ api: movieApi });
const toggleFavorites = createToggleFavorite({ api: movieApi });
const toggleWatchLater = createToggleWatchLater({ api: movieApi });

export const dependencyInjectionContainer = {
  getMovies,
  getTrending,
  getFavorites,
  getWatchLater,
  toggleFavorites,
  toggleWatchLater
};
export type DependencyInjectionContainer = typeof dependencyInjectionContainer;
