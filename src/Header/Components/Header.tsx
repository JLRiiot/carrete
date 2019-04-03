import {
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
  } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
  } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Toolbar from '@material-ui/core/Toolbar';
import Favorite from '@material-ui/icons/Favorite';
import MenuIcon from '@material-ui/icons/Menu';
import PlaylistPlay from '@material-ui/icons/PlaylistPlay';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BrowseField from '../../Browse/Containers/Browse';

const drawerWidth = 200;
const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: fade(theme.palette.primary.main, 1),
      height: '100%'
    },
    appBar: {
      marginLeft: drawerWidth,
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`
      }
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    menuItem: {
      color: theme.palette.common.white,
      textDecoration: 'none',
      height: 24,
      boxSizing: 'content-box',
      width: 'auto',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      '&$selected': {}
    },
    menuButton: {
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: fade(theme.palette.primary.main, 1),
      paddingLeft: theme.spacing.unit * 2,
      color: theme.palette.common.white,
      ...theme.mixins.toolbar
    },
    drawerPaper: {
      width: drawerWidth
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block'
      }
    }
  });

export interface HeaderProps extends WithStyles<typeof styles, true> {}
interface HeaderState {
  mobileOpen: boolean;
}

class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = { mobileOpen: false };
  }

  handleDrawerToggle = () => {
    this.setState((state) => ({ mobileOpen: !state.mobileOpen }));
  };
  drawer() {
    let { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.toolbar}>
          <Link to="/" className={classes.menuItem}>
            <Typography variant="h6" color="inherit" noWrap>
              The Carrete
            </Typography>
          </Link>
        </div>
        <Divider />
        <List>
          {['Favorites', 'Watch later'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon className={classes.menuItem}>
                {index % 2 === 0 ? <Favorite /> : <PlaylistPlay />}
              </ListItemIcon>
              <ListItemText>
                <Link to="/favorites" className={classes.menuItem}>
                  <Typography className={classes.menuItem}>{text}</Typography>
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
        <Divider />
      </div>
    );
  }
  render() {
    const { classes, theme } = this.props;
    return (
      <div>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <BrowseField />
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer}>
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper
              }}
            >
              {this.drawer()}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper
              }}
              variant="permanent"
              open
            >
              {this.drawer()}
            </Drawer>
          </Hidden>
        </nav>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Header);
