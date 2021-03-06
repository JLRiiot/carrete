import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Favorites, { FavoritesProps } from '../Components/Favorites';
import { loadFavoriteMoviesRequest } from '../State/Actions';
import { MoviesStore } from '../State/StoreModel';

type StateProps = Pick<FavoritesProps, 'favoriteMovies'>;
type DispatchProps = Pick<FavoritesProps, 'loadFavorites'>;

const mapStateToProps = ({ moviesReducer }: { moviesReducer: MoviesStore }): StateProps => ({
  favoriteMovies: moviesReducer.favoriteMovies
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  loadFavorites: () => dispatch(loadFavoriteMoviesRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
