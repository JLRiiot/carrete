import CssBaseline from '@material-ui/core/CssBaseline';
import React, { Fragment } from 'react';
import Header from '../../Header/Components/Header';
import Movies from '../../Movies/Containers/Movies';

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
