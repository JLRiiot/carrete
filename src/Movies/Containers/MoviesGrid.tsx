import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { ThunkDispatch } from 'redux-thunk';
import Favorites, { FavoritesProps } from '../Components/MoviesGrid';
import { toggleFavorite, toggleWatchLater } from '../State/Actions';
import { Movie, MoviesStore } from '../State/StoreModel';

type StateProps = Pick<FavoritesProps, 'favoritesIDs'>;
type DispatchProps = Pick<FavoritesProps, 'toggleFavorite' | 'toggleWatchLater'>;

const mapStateToProps = ({ moviesReducer }: { moviesReducer: MoviesStore }): StateProps => ({
  favoritesIDs: moviesReducer.favoritesIndex
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  toggleFavorite: (movie: Movie) => dispatch(toggleFavorite(movie)),
  toggleWatchLater: (movie: Movie) => dispatch(toggleWatchLater(movie))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Favorites)
);
