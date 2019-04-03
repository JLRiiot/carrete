import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { BrowseStore } from '../../Browse/State/StoreModel';
import MovieList, { MovieListProps } from '../Components/MovieList';
import { loadTrending } from '../State/Actions';
import { Movie, MoviesStore } from '../State/StoreModel';

type StateProps = Pick<MovieListProps, 'movies' | 'dirty'>;
type DispatchProps = Pick<MovieListProps, 'loadTrending'>;

const mapStateToProps = ({
  moviesReducer,
  browseReducer
}: {
  moviesReducer: MoviesStore;
  browseReducer: BrowseStore;
}): StateProps => {
  return {
    movies: moviesReducer.movies,
    dirty: browseReducer.dirty
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  loadTrending: () => dispatch(loadTrending())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
