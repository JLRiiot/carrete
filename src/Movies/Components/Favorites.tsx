import React, { Component, Fragment } from 'react';
import MoviesGrid from '../Containers/MoviesGrid';
import { Movie } from '../State/StoreModel';

export interface FavoritesProps {
  favoriteMovies: Movie[];
  loadFavorites(): void;
}
interface FavoritesState {}

export default class Favorites extends Component<FavoritesProps, FavoritesState> {
  componentDidMount() {
    this.props.loadFavorites();
  }
  render() {
    let { favoriteMovies } = this.props;
    return (
      <Fragment>
        <MoviesGrid movies={favoriteMovies} />
      </Fragment>
    );
  }
}
