import { BrowseActions } from './Actions';
import { SET_SEARCH } from './Events';
import { BrowseStore } from './StoreModel';

const defaultState = {
  search: ''
};

export const browseReducer = (state: BrowseStore = defaultState, action: BrowseActions): BrowseStore => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload
      };

    default:
      return state;
  }
};
