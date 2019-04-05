import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { ThunkDispatch } from 'redux-thunk';
import Favorites, { FavoritesProps } from '../Components/Favorites';
import { toggleFavorite } from '../State/Actions';
import { loadTrending } from '../State/Actions';
import { Movie, MoviesStore } from '../State/StoreModel';

type StateProps = Pick<FavoritesProps, 'favoriteMovies' | 'favoritesIDs' | 'movies'>;
type DispatchProps = Pick<FavoritesProps, 'toggleFavorite' | 'loadTrending'>;

const mapStateToProps = ({ moviesReducer }: { moviesReducer: MoviesStore }): StateProps => ({
  favoriteMovies: moviesReducer.favoriteMovies,
  favoritesIDs: moviesReducer.favoritesIDs,
  movies: moviesReducer.movies
});

const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
  toggleFavorite: (movie: Movie) => dispatch(toggleFavorite(movie)),
  loadTrending: () => dispatch(loadTrending())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Favorites)
);
