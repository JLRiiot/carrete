import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Favorites, { FavoritesProps } from '../Components/Favorites';
import { toggleFavorite } from '../State/Actions';
import { Movie, MoviesStore } from '../State/StoreModel';

type StateProps = Pick<FavoritesProps, 'favoriteMovies'>;
type DispatchProps = Pick<FavoritesProps, 'toggleFavorite'>;

const mapStateToProps = ({ moviesReducer }: { moviesReducer: MoviesStore }): StateProps => ({
  favoriteMovies: moviesReducer.favoriteMovies
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  toggleFavorite: (movie: Movie) => dispatch(toggleFavorite(movie))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Favorites);
