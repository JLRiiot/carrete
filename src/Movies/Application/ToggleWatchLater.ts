import { MovieApi } from '../Infrastructure/MovieApi';
import { Movie } from '../State/StoreModel';

export default ({ api }: { api: MovieApi }) => (movie: Movie): Movie => api.toggleWatchLater(movie);
