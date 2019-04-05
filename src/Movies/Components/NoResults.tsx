import {
  Button,
  createStyles,
  Grid,
  Icon,
  Theme,
  Typography,
  WithStyles,
  withStyles
  } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
import React, { Component, Fragment } from 'react';

const styles = (baseTheme: Theme) =>
  createStyles({
    root: {
      paddingTop: baseTheme.spacing.unit * 10
    },
    imgContainer: {
      width: '100%',
      height: '100%'
    },
    img: {
      height: '100%',
      width: '100%'
    },
    text: {
      width: '100%',
      lineHeight: 1
    },
    col1: {
      width: '20%'
    },
    col2: {
      width: '80%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  });

interface NoResultsProps extends WithStyles<typeof styles> {}
interface NoResultsState {}

class NoResults extends Component<NoResultsProps, NoResultsState> {
  render() {
    let { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item className={classes.col1}>
          <Icon className={classes.imgContainer}>
            <SvgIcon className={classes.img}>
              <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
            </SvgIcon>
          </Icon>
        </Grid>

        <Grid item className={classes.col2}>
          <Typography className={classes.text} variant={'title'}>
            Your seach didn't produce any results
          </Typography>
          <Typography variant={'subtitle1'}>Try a different search</Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(NoResults);
