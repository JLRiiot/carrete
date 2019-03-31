import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
  } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Header from '../Header/Components/Header';
import Movies from '../Movies/Containers/Movies';

const styles = (theme: Theme) =>
  createStyles({
    text: {
      paddingTop: theme.spacing.unit * 2,
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2
    },
    paper: {
      paddingBottom: 50
    },
    list: {
      marginBottom: theme.spacing.unit * 2
    },
    subHeader: {
      backgroundColor: theme.palette.background.paper
    }
  });

export interface Props extends WithStyles<typeof styles> {}

function App(props: Props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Movies />
    </React.Fragment>
  );
}

export default withStyles(styles)(App);
