import {
  createStyles,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Theme,
  WithStyles,
  withStyles
  } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import React, { Component, Fragment } from 'react';
import PosterCard from '../Containers/Poster';
import { Movie } from '../State/StoreModel';

const styles = (baseTheme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: baseTheme.palette.background.paper,
      paddingTop: '60px'
    },
    gridList: {
      width: '100%',
      transform: 'translateZ(0)'
    },
    titleBar: {
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' + 'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
    },
    icon: {
      color: 'white'
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
    return movies.map((movie) => <PosterCard key={movie.id} movie={movie} />);
  }

  render() {
    let { classes, movies, dirty } = this.props;
    return (
      <div className={classes.root}>
        <GridList cellHeight={200} spacing={1} className={classes.gridList}>
          {movies && this.renderMovies(movies)}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(MovieList);
