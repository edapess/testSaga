import {call, CallEffect, put, PutEffect, takeEvery} from 'redux-saga/effects';

import {
  POSTS_FETCH_FAILD,
  POSTS_FETCH_REQUESTED,
  POSTS_FETCH_SUCEED,
} from './actions';
import {getPostsApi} from '../services/api';
import {AxiosResponse} from 'axios';

function* fetchPosts(): Generator<
  CallEffect<AxiosResponse<any, any> | undefined> | PutEffect,
  void,
  AxiosResponse<any, any> | undefined
> {
  try {
    const posts = yield call(getPostsApi);
    yield put({type: POSTS_FETCH_SUCEED, payload: posts?.data});
  } catch (error: any) {
    yield put({type: POSTS_FETCH_FAILD, message: error.message});
  }
}

function* postsSaga() {
  yield takeEvery(POSTS_FETCH_REQUESTED, fetchPosts);
}

export default postsSaga;
