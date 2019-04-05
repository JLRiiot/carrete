import {
  Card,
  CardContent,
  CardMedia,
  createStyles,
  GridListTile,
  GridListTileBar,
  Icon,
  IconButton,
  Link,
  Theme,
  Typography,
  WithStyles,
  withStyles
  } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import * as _ from 'lodash';
import React, { Component } from 'react';
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
    },
    img: {
      height: 'auto',
      width: '100%'
    }
  });

export interface PosterCardProps extends WithStyles<typeof styles> {
  movie: Movie;
  favoritesIDs: number[];
  toggleFavorite(movie: Movie): void;
}

type PosterCardState = {};

class PosterCard extends Component<PosterCardProps, PosterCardState> {
  shouldComponentUpdate(nextProps: PosterCardProps, nextState: PosterCardState) {
    let prevContains = this.props.favoritesIDs.indexOf(this.props.movie.id) !== -1;
    let nextContains = nextProps.favoritesIDs.indexOf(this.props.movie.id) !== -1;

    return (nextContains && !prevContains) || (!nextContains && prevContains);
  }

  render() {
    let { movie, favoritesIDs, classes } = this.props;
    return (
      <GridListTile key={movie.id} cols={movie.popularity > 200 ? 2 : 1} rows={movie.popularity > 200 ? 2 : 1}>
        <img
          className={classes.img}
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
    );
  }
}
export default withStyles(styles)(PosterCard);
