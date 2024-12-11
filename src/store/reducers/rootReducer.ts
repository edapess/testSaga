import {combineReducers} from '@reduxjs/toolkit';
import {postsReducer} from '../../features/HomeScreen/redux/reducer';
import {EReducerBasename} from '../../constants/reducerBaseName';
//import posts from '../../features/HomeScreen/redux/reducer';

export const rootReducer = combineReducers({
  [EReducerBasename.POSTS]: postsReducer,
});
