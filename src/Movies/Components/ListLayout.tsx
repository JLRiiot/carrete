import { Grid } from '@material-ui/core';
import React, { Component } from 'react';

export default class ListLayout extends Component {
  render() {
    return (
      <Grid container direction="row" justify="flex-start" alignItems="flex-start">
        {this.props.children}
      </Grid>
    );
  }
}
