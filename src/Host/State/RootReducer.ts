import { combineReducers } from 'redux';
import { browseReducer } from '../../Browse/State/Reducer';
import { moviesReducer } from '../../Movies/State/Reducer';

export default combineReducers({ moviesReducer, browseReducer });
