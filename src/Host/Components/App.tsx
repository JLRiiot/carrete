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
import Favorites from '../../Movies/Containers/Favorites';
import SearchResults from '../../Movies/Containers/SearchResults';
import Trending from '../../Movies/Containers/Trending';
import WatchLater from '../../Movies/Containers/WatchLater';

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
        <Route path={'/'} exact component={Trending} />
        <Route path={'/trending'} exact component={Trending} />
        <Route path={'/search'} exact component={SearchResults} />
        <Route path={'/favorites'} component={Favorites} />
        <Route path={'/watchlater'} component={WatchLater} />
      </div>
    </Router>
  );
}

export default withStyles(styles)(App);
