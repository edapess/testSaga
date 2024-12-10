import {combineReducers} from '@reduxjs/toolkit';
import posts from '../../features/HomeScreen/redux/reducer';

export const rootReducer = combineReducers({
  posts: posts,
});
