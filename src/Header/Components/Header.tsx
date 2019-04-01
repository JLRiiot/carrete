import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
  } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import React, { Component } from 'react';
import BrowseField from '../../Browse/Containers/Browse';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: '100%'
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block'
      }
    }
  });

export interface HeaderProps extends WithStyles<typeof styles> {}
interface HeaderState {}

class Header extends Component<HeaderProps, HeaderState> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <BrowseField />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
