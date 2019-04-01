import * as _ from 'lodash';
import { Movie } from '../State/StoreModel';

const defaultQs = { api_key: '598d1b35439c46b18d2ce4d843016e23', language: 'en-US', page: '1', include_adult: 'false' };

const search = async (search: string, page: number = 1): Promise<Movie[]> => {
  const qs = { ...defaultQs, query: search, page: page };
  let result = await http<Movie[]>(`https://api.themoviedb.org/3/search/movie?${getParams(qs)}`);

  return Promise.resolve(result);
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

export interface MovieApi {
  search(search: string, page: number): Promise<Movie[]>;
}
export { search };
