import React, { Component, Fragment } from 'react';
import MoviesGrid from '../Containers/MoviesGrid';
import { Movie } from '../State/StoreModel';

export interface WatchLaterProps {
  watchLaterMovies: Movie[];
  loadWatchLater(): void;
}
interface WatchLaterState {}
export default class WatchLater extends Component<WatchLaterProps, WatchLaterState> {
  componentDidMount() {
    this.props.loadWatchLater();
  }
  render() {
    let { watchLaterMovies } = this.props;
    return (
      <Fragment>
        <MoviesGrid movies={watchLaterMovies} />
      </Fragment>
    );
  }
}
