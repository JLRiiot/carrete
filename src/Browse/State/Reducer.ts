import { BrowseActions } from './Actions';
import { SET_SEARCH } from './Events';
import { BrowseStore } from './StoreModel';

const defaultState: BrowseStore = {
  search: '',
  dirty: false
};

export const browseReducer = (state: BrowseStore = defaultState, action: BrowseActions): BrowseStore => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
        dirty: true
      };

    default:
      return state;
  }
};
