import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import PosterCard, { PosterCardProps } from '../Components/PosterCard';
import { toggleFavorite } from '../State/Actions';
import { Movie, MoviesStore } from '../State/StoreModel';

type StateProps = Pick<PosterCardProps, 'favoritesIDs'>;
type DispatchProps = Pick<PosterCardProps, 'toggleFavorite'>;
type OwnProps = Pick<PosterCardProps, 'movie'>;

const mapStateToProps = ({ moviesReducer }: { moviesReducer: MoviesStore }): StateProps => ({
  favoritesIDs: moviesReducer.favoritesIDs
});
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  toggleFavorite: (movie: Movie) => dispatch(toggleFavorite(movie))
});
const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps, ownProps: OwnProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(PosterCard);
