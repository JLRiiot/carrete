import configureMockStore, { MockStoreCreator } from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { fake, stub } from 'sinon';
import { LOAD_SEARCH_RESULTS } from '../../Movies/State/Events';
import { defaultState as defaultMoviesState } from '../../Movies/State/Reducer';
import { delayedSearch, setSearch } from './Actions';
import { SET_SEARCH } from './Events';

describe('action creators', () => {
  it('should create SetSearch action', () => {
    const search = 'Back to the future';
    const expectedResult = { type: SET_SEARCH, payload: search };
    const result = setSearch(search);

    expect(result).toEqual(expectedResult);
  });
});
const mockData = { results: [{ id: 1, title: 'fake 1', overview: 'fake 1', poster_path: 'path/1' }] };
const reducers = { moviesReducer: defaultMoviesState };
describe('async actions', () => {
  let mockStore: MockStoreCreator<{}, ThunkDispatch<{}, {}, any>>;

  beforeEach(() => {
    let container = {
      getMovies: fake.resolves(mockData)
    };
    mockStore = configureMockStore<{}, ThunkDispatch<{}, {}, any>>([thunk.withExtraArgument({ container })]);
  });

  it('should call getMovies use case', (done) => {
    let store = mockStore(reducers);
    const search = 'Back to the future';

    const expectedActions = [
      {
        type: SET_SEARCH,
        payload: search
      },
      {
        type: LOAD_SEARCH_RESULTS,
        payload: mockData.results
      }
    ];

    store.dispatch(delayedSearch(search));

    setTimeout(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
