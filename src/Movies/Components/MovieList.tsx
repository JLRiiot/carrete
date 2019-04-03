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
import ListLayout from './ListLayout';
import NoResults from './NoResults';

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing.unit
      }
    },
    text: {
      paddingTop: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2,
      textAlign: 'center',
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
    list: {
      marginBottom: theme.spacing.unit * 2
    },
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3
    }
  });

export interface MovieListProps extends WithStyles<typeof styles> {
  movies: Movie[];
  dirty: boolean;
  loadTrending: Function;
}

interface MovieListState {}

class MovieList extends Component<MovieListProps, MovieListState> {
  componentDidMount() {
    this.props.loadTrending();
  }
  renderMovies(movies: Movie[]) {
    return movies.map((movie) => (
      <Fragment key={movie.id}>
        <PosterCard movie={movie} />
      </Fragment>
    ));
  }

  render() {
    let { classes, movies, dirty } = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Paper square className={classes.paper}>
          <Typography className={classes.text} variant="h5" gutterBottom>
            The Carrete
          </Typography>
          {dirty && movies && !movies.length && <NoResults />}
          {movies && movies.length > 0 && <ListLayout>{this.renderMovies(movies)}</ListLayout>}
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(MovieList);
