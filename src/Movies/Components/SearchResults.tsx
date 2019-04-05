import {
  createStyles,
  Theme,
  WithStyles,
  withStyles
  } from '@material-ui/core';
import React, { Component, Fragment } from 'react';
import MoviesGrid from '../Containers/MoviesGrid';
import { Movie } from '../State/StoreModel';
import NoResults from './NoResults';

export interface SearchResultsProps {
  searchResults: Movie[];
  dirty: boolean;
}

interface SearchResultsState {}

class SearchResults extends Component<SearchResultsProps, SearchResultsState> {
  componentDidMount() {}

  render() {
    let { searchResults, dirty } = this.props;
    return (
      <Fragment>{dirty && !searchResults.length ? <NoResults /> : <MoviesGrid movies={searchResults} />}</Fragment>
    );
  }
}

export default SearchResults;
