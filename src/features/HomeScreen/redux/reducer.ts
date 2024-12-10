import {
  POSTS_FETCH_FAILD,
  POSTS_FETCH_REQUESTED,
  POSTS_FETCH_SUCEED,
} from '../../../store/actions';
import {IPost} from '../../../store/dataTypes';

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

export default function posts(
  state = initialState,
  action: Action<IPost[] & string>,
): typeof initialState {
  switch (action.type) {
    case POSTS_FETCH_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };
    case POSTS_FETCH_SUCEED:
      return {
        ...state,
        isLoading: false,
        posts: [...state.posts, ...action?.payload],
      };
    case POSTS_FETCH_FAILD:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
