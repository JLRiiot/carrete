import {
  Avatar,
  createStyles,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Paper,
  Theme,
  Typography,
  WithStyles,
  withStyles
  } from '@material-ui/core';
import React, { Component, Fragment } from 'react';
import { Movie } from '../State/StoreModel';

const styles = (theme: Theme) =>
  createStyles({
    paper: {},
    text: {},
    list: {},
    subHeader: {}
  });

export interface MovieListProps extends WithStyles<typeof styles> {
  movies: Movie[];
}

interface MovieListState {}

class MovieList extends Component<MovieListProps, MovieListState> {
  renderMovies(movies: Movie[]) {
    return movies.map(({ id, title, overview, video }) => (
      <Fragment key={id}>
        <ListItem button>
          <ListItemText primary={title} secondary={overview} />
        </ListItem>
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
