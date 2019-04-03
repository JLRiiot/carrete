import { MovieApi } from '../Infrastructure/MovieApi';
import { Movie } from '../State/StoreModel';

export default ({ api }: { api: MovieApi }) => async (): Promise<Movie[]> => {
  try {
    let result = api.getTrending();
    return Promise.resolve(result);
  } catch (error) {
    return Promise.reject(error);
  }
};
