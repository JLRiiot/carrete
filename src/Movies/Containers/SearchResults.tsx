import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { BrowseStore } from '../../Browse/State/StoreModel';
import MovieList, { SearchResultsProps } from '../Components/SearchResults';
import { MoviesStore } from '../State/StoreModel';

type StateProps = Pick<SearchResultsProps, 'searchResults' | 'dirty'>;

const mapStateToProps = ({
  moviesReducer,
  browseReducer
}: {
  moviesReducer: MoviesStore;
  browseReducer: BrowseStore;
}): StateProps => {
  return {
    searchResults: moviesReducer.searchResults,
    dirty: browseReducer.dirty
  };
};
export default connect(mapStateToProps)(MovieList);
