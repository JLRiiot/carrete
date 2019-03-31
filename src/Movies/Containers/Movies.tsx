import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import MovieList, { MovieListProps } from '../Components/MovieList';
import { loadMovies } from '../State/Actions';
import { Movie, MoviesStore } from '../State/StoreModel';

type StateProps = Pick<MovieListProps, 'movies'>;
type DispatchProps = Pick<MovieListProps, 'loadMovies'>;

const mapStateToProps = ({ moviesReducer }: { moviesReducer: MoviesStore }): StateProps => {
  console.log(moviesReducer);
  return {
    movies: moviesReducer.movies
  };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  loadMovies: (movies: Movie[]) => dispatch(loadMovies(movies))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList);
