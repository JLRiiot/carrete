import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import PosterCard, { PosterCardProps } from '../Components/PosterCard';
import { addFavorite } from '../State/Actions';
import { MoviesStore } from '../State/StoreModel';

type StateProps = Pick<PosterCardProps, 'favoritesIDsHack'>;
type DispatchProps = Pick<PosterCardProps, 'addFavorite'>;
type OwnProps = Pick<PosterCardProps, 'movie'>;

const mapStateToProps = ({ moviesReducer }: { moviesReducer: MoviesStore }): StateProps => ({
  favoritesIDsHack: moviesReducer.favoritesIDsHack
});
const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  addFavorite: (id: number) => dispatch(addFavorite(id))
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
