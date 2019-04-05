import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import WatchLater, { WatchLaterProps } from '../Components/WatchLater';
import { loadWatchLaterRequest } from '../State/Actions';
import { MoviesStore } from '../State/StoreModel';

type StateProps = Pick<WatchLaterProps, 'watchLaterMovies'>;
type DispatchProps = Pick<WatchLaterProps, 'loadWatchLater'>;

const mapStateProps = ({ moviesReducer }: { moviesReducer: MoviesStore }): StateProps => ({
  watchLaterMovies: moviesReducer.watchLaterMovies
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  loadWatchLater: () => dispatch(loadWatchLaterRequest())
});

export default connect(
  mapStateProps,
  mapDispatchToProps
)(WatchLater);
