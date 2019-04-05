import createGetMovies from '../../Movies/Application/GetMovies';
import createGetTrending from '../../Movies/Application/GetTrending';
import { movieApi } from '../../Movies/Infrastructure/MovieApi';

const getMovies = createGetMovies({ api: movieApi });
const getTrending = createGetTrending({ api: movieApi });

export const dependencyInjectionContainer = { getMovies, getTrending };
export type DependencyInjectionContainer = typeof dependencyInjectionContainer;
