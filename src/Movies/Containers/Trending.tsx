import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import TrendingMovies, { TrendingMoviesProps } from '../Components/TrendingMovies';
import { loadTrendingRequest } from '../State/Actions';
import { MoviesStore } from '../State/StoreModel';

type StateProps = Pick<TrendingMoviesProps, 'trendingMovies'>;
type DispatchProps = Pick<TrendingMoviesProps, 'loadTrending'>;

const mapStateToProps = ({ moviesReducer }: { moviesReducer: MoviesStore }): StateProps => ({
  trendingMovies: moviesReducer.trendingMovies
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  loadTrending: () => dispatch(loadTrendingRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TrendingMovies);
