import createGetMovies from '../../Movies/Application/GetMovies';
import * as searchApi from '../../Movies/Infrastructure/MovieApi';
import { Movie } from '../../Movies/State/StoreModel';

const getMovies = createGetMovies({ api: searchApi });

export interface DependencyInjectionContainer {
  getMovies(search: string, page?: number): Promise<Movie[]>;
}
export { getMovies };
