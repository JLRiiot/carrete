import { combineReducers } from 'redux';
import { moviesReducer } from '../../Movies/State/Reducer';

export default combineReducers({ 'carrete-movies': moviesReducer });
