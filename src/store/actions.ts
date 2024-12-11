import {createAction} from '@reduxjs/toolkit';
import {EReducerBasename} from '../constants/reducerBaseName';
import {IPost} from './dataTypes';

const FETCH_REQUESTED = 'FETCH_REQUESTED';
const FETCH_SUCCEED = 'FETCH_SUCEED';
const FETCH_FAILD = 'FETFAILDTED';

const namespace = EReducerBasename.POSTS.toUpperCase();

export const fetchPostsRequested = createAction(
  `@${namespace}${FETCH_REQUESTED}`,
);
export const fetchPostsSucceed = createAction<IPost[]>(
  `@${namespace}${FETCH_SUCCEED}`,
);
export const fetchPostsFailed = createAction<string>(
  `@${namespace}${FETCH_FAILD}`,
);
