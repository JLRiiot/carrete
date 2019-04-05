import {
  createStyles,
  Theme,
  WithStyles,
  withStyles
  } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../../Header/Components/Header';
import MovieGrid from '../../Movies/Containers/Favorites';
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
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <Route path={'/'} exact component={MovieGrid} />
        <Route path={'/favorites'} component={MovieGrid} />
      </div>
    </Router>
  );
}

export default withStyles(styles)(App);
