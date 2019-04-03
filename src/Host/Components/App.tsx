import {
  createStyles,
  Theme,
  WithStyles,
  withStyles
  } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import Header from '../../Header/Components/Header';
import Movies from '../../Movies/Containers/Movies';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    }
  });
export interface Props extends WithStyles<typeof styles> {}

function App(props: Props) {
  let { classes } = props;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Movies />
    </div>
  );
}

export default withStyles(styles)(App);
