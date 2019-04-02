import { Typography } from '@material-ui/core';
import React, { Component, Fragment } from 'react';

export default class NoResults extends Component {
  render() {
    return (
      <Fragment>
        <Typography>Try adding some search criteria above</Typography>
      </Fragment>
    );
  }
}
