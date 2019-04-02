import {
  createStyles,
  List,
  Paper,
  Theme,
  Typography,
  WithStyles,
  withStyles
  } from '@material-ui/core';
import React, { Component, Fragment } from 'react';
import PosterCard from '../Containers/Poster';
import { Movie } from '../State/StoreModel';

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      paddingTop: 60
    },
    text: {
      paddingTop: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      textAlign: 'center'
    },
    list: { marginBottom: theme.spacing.unit * 2 },
    subHeader: {}
  });

export interface MovieListProps extends WithStyles<typeof styles> {
  movies: Movie[];
  loadMovies: Function;
}

interface MovieListState {}

class MovieList extends Component<MovieListProps, MovieListState> {
  componentDidMount() {}
  renderMovies(movies: Movie[]) {
    return movies.map((movie) => (
      <Fragment key={movie.id}>
        <PosterCard movie={movie} />
      </Fragment>
    ));
  }

  render() {
    let { classes, movies } = this.props;
    return (
      <Fragment>
        <Paper square className={classes.paper}>
          <Typography className={classes.text} variant="h5" gutterBottom>
            Carrete
          </Typography>
          <List className={classes.list}>{this.renderMovies(movies)}</List>
        </Paper>
      </Fragment>
    );
  }
}

export default withStyles(styles)(MovieList);
