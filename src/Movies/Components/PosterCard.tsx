import {
  Card,
  CardContent,
  CardMedia,
  Link,
  Theme,
  Typography
  } from '@material-ui/core';
import { CardClassKey } from '@material-ui/core/Card';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React, { Component } from 'react';

export default class PosterCard extends Component {
  static getThemeOverride(baseTheme: Theme): { MuiCard: Partial<Record<'root', CSSProperties>> } {
    return {
      MuiCard: {
        root: {
          '&.MuiNewsCard--02': {
            maxWidth: 304,
            margin: 'auto',
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
            '& .MuiCardMedia-root': {
              height: '100%'
            },
            '& .MuiCardContent-root': {
              position: 'absolute',
              bottom: 0,
              padding: baseTheme.spacing.unit * 3,
              color: baseTheme.palette.common.white,
              textAlign: 'center',
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
  render() {
    return (
      <Card className={'MuiNewsCard--02'}>
        <CardMedia
          component={'img'}
          className={'MuiCardMedia-root'}
          src={` http://image.tmdb.org/t/p/w500/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg`}
        />
        <CardContent className={'MuiCardContent-root'}>
          <Typography className={'MuiTypography--heading'} color={'inherit'} variant={'h3'} gutterBottom>
            Space
          </Typography>
          <Typography className={'MuiTypography--subheading'} color={'inherit'}>
            The space between the stars and galaxies is largely empty.
          </Typography>
          <Typography className={'MuiTypography--explore'} color={'inherit'} variant={'caption'}>
            <Link color={'inherit'} underline={'none'}>
              EXPLORE
            </Link>
          </Typography>
        </CardContent>
      </Card>
    );
  }
}
