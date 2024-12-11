import {call, CallEffect, put, PutEffect, takeEvery} from 'redux-saga/effects';

import {
  fetchPostsFailed,
  fetchPostsRequested,
  fetchPostsSucceed,
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
    yield put(fetchPostsSucceed(posts?.data));
  } catch (error: any) {
    yield put(fetchPostsFailed(error.message));
  }
}

function* postsSaga() {
  yield takeEvery(fetchPostsRequested, fetchPosts);
}

export default postsSaga;
