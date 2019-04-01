import { MovieApi } from '../Infrastructure/MovieApi';
import { Movie } from '../State/StoreModel';

export default ({ api }: { api: MovieApi }) => async (search: string, page: number = 1): Promise<Movie[]> => {
  if (search === '') {
    console.log(search);
    return Promise.resolve([]);
  }

  try {
    let result = await api.search(search, page);
    return Promise.resolve(result);
  } catch (error) {
    return Promise.reject(error);
  }
};
