import {
  Button,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Slide,
  Theme,
  WithStyles,
  withStyles
  } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import React, { Component, MouseEvent } from 'react';
import { RouteComponentProps } from 'react-router';
import { Movie } from '../State/StoreModel';

const styles = (baseTheme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: baseTheme.palette.background.paper,
      paddingTop: '60px'
    },
    gridList: {
      width: '100%',
      transform: 'translateZ(0)'
    },
    titleBar: {
      background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' + 'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
    },
    icon: {
      color: 'white'
    }
  });

export interface FavoritesProps extends WithStyles<typeof styles>, RouteComponentProps<{}> {
  toggleFavorite(movie: Movie): void;
  toggleWatchLater(movie: Movie): void;
  favoritesIDs: number[];
  movies: Movie[];
}
interface FavoritesState {
  dialogOpen: boolean;
  selectedMovie?: Movie;
}

function Transition(props: TransitionProps) {
  return <Slide direction="up" {...props} />;
}

class Favorites extends Component<FavoritesProps, FavoritesState> {
  constructor(props: FavoritesProps) {
    super(props);
    this.state = { dialogOpen: false, selectedMovie: undefined };

    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  componentDidMount() {}
  handleClickOpen(movie: Movie) {
    this.setState((state) => ({ ...state, dialogOpen: true, selectedMovie: movie }));
  }
  handleClose() {
    this.setState((state) => ({ ...state, dialogOpen: false, selectedMovie: undefined }));
  }
  handleClickOk() {
    if (this.state.selectedMovie) {
      this.props.toggleWatchLater(this.state.selectedMovie);
    }
    this.handleClose();
  }
  render() {
    let { classes, movies, favoritesIDs } = this.props;

    return (
      <div className={classes.root}>
        <GridList cellHeight={200} spacing={1} className={classes.gridList}>
          {movies &&
            movies.map((movie: Movie, index: number) => (
              <GridListTile
                onClick={() => this.handleClickOpen(movie)}
                key={movie.id}
                cols={2}
                rows={movie.popularity > 200 ? 2 : 1}
              >
                <img
                  src={`http://image.tmdb.org/t/p/w780${movie.poster_path}`}
                  alt={movie.title ? movie.title : movie.name}
                />
                <GridListTileBar
                  title={movie.title ? movie.title : movie.name}
                  titlePosition="top"
                  className={classes.titleBar}
                  actionIcon={
                    <IconButton
                      className={classes.icon}
                      onClick={(e: MouseEvent) => {
                        e.stopPropagation();
                        this.props.toggleFavorite(movie);
                      }}
                    >
                      {favoritesIDs.indexOf(movie.id) < 0 ? <StarBorderIcon /> : <StarRoundedIcon />}
                    </IconButton>
                  }
                  actionPosition="left"
                />
              </GridListTile>
            ))}
        </GridList>
        <Dialog
          open={this.state.dialogOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{`Adding to playlist`}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {this.state.selectedMovie &&
                `Do you want to add [${this.state.selectedMovie.title}] to watch later playlist?`}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              No
            </Button>
            <Button onClick={() => this.handleClickOk()} color="primary">
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(Favorites);
