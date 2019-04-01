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
import PosterCard from './PosterCard';

const mocked = [
  {
    vote_count: 8052,
    id: 694,
    video: false,
    vote_average: 8.2,
    title: 'The Shining',
    popularity: 20.13,
    poster_path: '/9fgh3Ns1iRzlQNYuJyK0ARQZU7w.jpg',
    original_language: 'en',
    original_title: 'The Shining',
    genre_ids: [27, 53],
    backdrop_path: '/h4DcDCOkQBENWBJZjNlPv3adQfM.jpg',
    adult: false,
    overview:
      "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the madness that lurks within.",
    release_date: '1980-05-22'
  },
  {
    vote_count: 42,
    id: 18875,
    video: false,
    vote_average: 7,
    title: "Making 'The Shining'",
    popularity: 3.47,
    poster_path: '/s1Uc8J4wpXTDKTJ08dKzlHVTc0q.jpg',
    original_language: 'en',
    original_title: "Making 'The Shining'",
    genre_ids: [99],
    backdrop_path: '/6fwbN3OeoiN1Dpx1ZBfnei78hJ4.jpg',
    adult: false,
    overview:
      "Directed and Edited by Vivian Kubrick, Stanley Kubrick's daughter, this film offers a look behind the scenes during the making of The Shining.",
    release_date: '1980-10-04'
  }
];

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
