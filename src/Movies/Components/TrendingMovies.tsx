import React, { Component, Fragment } from 'react';
import MoviesGrid from '../Containers/MoviesGrid';
import { Movie } from '../State/StoreModel';

export interface TrendingMoviesProps {
  trendingMovies: Movie[];
  loadTrending(): void;
}
interface TrendingMoviesState {}
export default class TrendingMovies extends Component<TrendingMoviesProps, TrendingMoviesState> {
  componentDidMount() {
    this.props.loadTrending();
  }
  render() {
    let { trendingMovies } = this.props;
    return (
      <Fragment>
        <MoviesGrid movies={trendingMovies} />
      </Fragment>
    );
  }
}
