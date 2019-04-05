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
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
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

export interface FavoritesProps extends WithStyles<typeof styles>, RouteComponentProps<{}> {
  toggleFavorite(movie: Movie): void;
  favoritesIDs: number[];
  movies: Movie[];
}
interface FavoritesState {}
class Favorites extends Component<FavoritesProps, FavoritesState> {
  componentDidMount() {}
  render() {
    let { classes, movies, favoritesIDs } = this.props;

    return (
      <div className={classes.root}>
        <GridList cellHeight={200} spacing={1} className={classes.gridList}>
          {movies &&
            movies.map((movie: Movie, index: number) => (
              <GridListTile key={movie.id} cols={2} rows={movie.popularity > 200 ? 2 : 1}>
                <img
                  src={`http://image.tmdb.org/t/p/w780${movie.poster_path}`}
                  alt={movie.title ? movie.title : movie.name}
                />
                <GridListTileBar
                  title={movie.title ? movie.title : movie.name}
                  titlePosition="top"
                  className={classes.titleBar}
                  actionIcon={
                    <IconButton className={classes.icon} onClick={() => this.props.toggleFavorite(movie)}>
                      {favoritesIDs.indexOf(movie.id) < 0 ? <StarBorderIcon /> : <StarRoundedIcon />}
                    </IconButton>
                  }
                  actionPosition="left"
                />
              </GridListTile>
            ))}
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(Favorites);
