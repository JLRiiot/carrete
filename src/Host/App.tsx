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
import PosterCard from '../Movies/Components/PosterCard';
import Movies from '../Movies/Containers/Movies';

export interface Props {}

function App(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header />
      <Movies />
    </React.Fragment>
  );
}

export default App;
