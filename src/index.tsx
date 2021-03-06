import { createMuiTheme, MuiThemeProvider, Theme } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { dependencyInjectionContainer } from './Host/Application/DependencyInjection';
import App from './Host/Components/App';
import rootReducer from './Host/State/RootReducer';
import * as serviceWorker from './serviceWorker';

const muiBaseTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#263238'
    },
    secondary: {
      main: '#3949ab'
    }
  },
  typography: {
    useNextVariants: true
  }
});

let store = createStore(rootReducer, applyMiddleware(thunk));

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ container: dependencyInjectionContainer })))
  );
}

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={muiBaseTheme}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
