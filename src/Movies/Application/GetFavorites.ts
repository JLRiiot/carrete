import { async } from 'q';
import { MovieApi } from '../Infrastructure/MovieApi';
import { Movie } from '../State/StoreModel';

export default ({ api }: { api: MovieApi }) => (): { movies: Movie[]; index: number[] } => api.getFavoriteMovies();
