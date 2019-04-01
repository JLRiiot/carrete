import {
  Card,
  CardContent,
  CardMedia,
  Icon,
  IconButton,
  Link,
  Theme,
  Typography
  } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import * as _ from 'lodash';
import React, { Component } from 'react';
import { Movie } from '../State/StoreModel';

export interface PosterCardProps {
  movie: Movie;
  favoritesIDsHack: number[];
  addFavorite(id: number): void;
}

type PosterCardState = {};

export default class PosterCard extends Component<PosterCardProps, PosterCardState> {
  static getThemeOverride(baseTheme: Theme): { MuiCard: Partial<Record<'root', CSSProperties>> } {
    return {
      MuiCard: {
        root: {
          '&.MuiNewsCard--02': {
            maxWidth: 304,
            margin: 'auto',
            marginBottom: baseTheme.spacing.unit * 3,
            position: 'relative',
            transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
            boxShadow: '0 16px 40px -12.125px rgba(0,0,0,0.3)',
            borderRadius: 0,
            '&:hover': {
              '& .MuiTypography--explore': {
                transform: 'scale(1.2)'
              }
            },
            '& button': {
              marginLeft: 0
            },
            '& .MuiIconButton-root': {
              padding: baseTheme.spacing.unit
            },
            '& .MuiCardMedia-root': {
              height: '100%'
            },
            '& .MuiCardContent-root': {
              position: 'absolute',
              height: '100%',
              bottom: 0,
              padding: baseTheme.spacing.unit * 3,
              color: baseTheme.palette.common.white,
              backgroundColor: fade(baseTheme.palette.primary.dark, 0.85),
              textAlign: 'left',
              '& .MuiTypography--subheading': {
                lineHeight: 1.8,
                letterSpacing: 0.5,
                marginBottom: '40%'
              },
              '& .MuiTypography--explore': {
                marginBottom: 16,
                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                letterSpacing: 2
              }
            }
          }
        }
      }
    };
  }

  //TODO: Implement a good logic here to prevent innecessary re-renders
  // shouldComponentUpdate(nextProps: PosterCardProps, nextState: PosterCardState) {
  //   let prevHack = this.props.favoritesIDsHack;
  //   let nextHack = this.props.favoritesIDsHack;

  //   console.log(prevHack.indexOf(this.props.movie.id));
  //   console.log(nextHack.indexOf(this.props.movie.id));

  //   return (
  //     this.props.movie.id !== nextProps.movie.id ||
  //     (this.props.movie.id === nextProps.movie.id &&
  //       prevHack.indexOf(this.props.movie.id) !== nextHack.indexOf(this.props.movie.id))
  //   );
  // }

  render() {
    let { movie, favoritesIDsHack } = this.props;
    return (
      <Card className={'MuiNewsCard--02'}>
        <CardMedia
          component={'img'}
          className={'MuiCardMedia-root'}
          src={` http://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
        <CardContent className={'MuiCardContent-root'}>
          <Typography className={'MuiTypography--heading'} color={'inherit'} variant={'h3'} gutterBottom>
            {_.truncate(movie.title, { length: 20 })}
          </Typography>
          <Typography className={'MuiTypography--subheading'} color={'inherit'}>
            {_.truncate(movie.overview, { length: 150 })}
          </Typography>
          <IconButton
            className={'MuiIconButton-root'}
            color={favoritesIDsHack.indexOf(movie.id) < 0 ? 'inherit' : 'secondary'}
            onClick={() => this.props.addFavorite(movie.id)}
          >
            <Icon>favorite</Icon>
          </IconButton>
          <Typography className={'MuiTypography--explore'} color={'inherit'} variant={'caption'}>
            <Link color={'inherit'} underline={'none'}>
              Watch later >>
            </Link>
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
