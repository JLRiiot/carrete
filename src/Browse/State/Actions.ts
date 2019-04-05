import * as _ from 'lodash';
import { Dispatch } from 'redux';
import { DependencyInjectionContainer } from '../../Host/Application/DependencyInjection';
import { clearMovies, loadSearchResults } from '../../Movies/State/Actions';
import { Movie } from '../../Movies/State/StoreModel';
import { SET_SEARCH } from './Events';

export type SetSearch = {
  type: SET_SEARCH;
  payload: string;
};

export const setSearch = (search: string): SetSearch => ({
  type: SET_SEARCH,
  payload: search
});

export const delayedSearch = (search: string) => (
  dispatch: Dispatch,
  getState: Function,
  { container }: { container: DependencyInjectionContainer }
) => {
  dispatch(setSearch(search));
  if (search !== '') {
    //TODO: get rid of (result: any) => ... by creating an interface for API response
    container
      .getMovies(search)
      .then((result: any) => dispatch(loadSearchResults(result.results)))
      .catch((error) => console.error(error));
  } else {
    dispatch(clearMovies());
  }
};

export type BrowseActions = SetSearch;
