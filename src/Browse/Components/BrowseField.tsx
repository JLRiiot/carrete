import {
  createStyles,
  Theme,
  WithStyles,
  withStyles
  } from '@material-ui/core';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import * as _ from 'lodash';
import React, { ChangeEvent, Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

const styles = (theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit,
        width: 'auto'
      }
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    inputRoot: {
      color: 'inherit',
      width: '100%'
    },
    inputInput: {
      paddingTop: theme.spacing.unit,
      paddingRight: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
      paddingLeft: theme.spacing.unit * 10,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200
        }
      }
    }
  });

export interface BrowseFieldProps extends WithStyles<typeof styles>, RouteComponentProps<{}> {
  handleSearch: Function;
  search: string;
}
interface BrowseFieldState {}

class BrowseField extends Component<BrowseFieldProps, BrowseFieldState> {
  constructor(props: BrowseFieldProps) {
    super(props);
  }

  delayedSearch = _.debounce((value: string) => {
    this.props.history.push('/search');
    this.props.handleSearch(value);
  }, 300);

  handleSearch = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => this.delayedSearch(event.target.value);

  render() {
    let { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.grow} />
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            onChange={this.handleSearch.bind(this)}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(BrowseField);
