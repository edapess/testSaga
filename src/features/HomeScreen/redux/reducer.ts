import {createSlice} from '@reduxjs/toolkit';
import {
  fetchPostsFailed,
  fetchPostsRequested,
  fetchPostsSucceed,
} from '../../../store/actions';
import {IPost} from '../../../store/dataTypes';
import {EReducerBasename} from '../../../constants/reducerBaseName';

export interface Action<P> {
  readonly type: string;
  readonly payload: P;
}

const initialState: {
  posts: IPost[];
  isLoading: boolean;
  error: string;
} = {
  posts: [],
  isLoading: false,
  error: '',
};

export const postsSlice = createSlice({
  name: EReducerBasename.POSTS,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPostsSucceed, (state, {payload}) => {
      state.posts = [...state.posts, ...payload];
      state.isLoading = false;
    });
    builder.addCase(fetchPostsRequested, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchPostsFailed, (state, {payload}) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export const {reducer: postsReducer} = postsSlice;
