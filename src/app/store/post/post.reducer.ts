import { createReducer, on } from '@ngrx/store';
import * as postActions from './post.actions';
import { ReturnedData, PostData } from '../../core/models/post-data';
import { createEntityAdapter } from '@ngrx/entity';

export interface IPostState {
  Posts: ReturnedData;
  loading: boolean;
  error: any;
}

export const initialState: IPostState = {
  Posts: {
      data: [],
      total: 0,
      page: 0,
      limit: 0
  },
  loading: false,
  error: null,
};

const adapter = createEntityAdapter()

export const postReducer = createReducer(
  initialState,
  on(postActions.loadPosts, (state) => ({ ...state, loading: true })),
  on(postActions.loadPostsSuccess, (state, {Posts}) => ({ 
      ...state,
      Posts,
      loading: false, 
      error: null 
    })
  ),
  on(postActions.loadPostsFailure, (state, { error }) => ({ 
    ...state, 
    loading: false, 
    error }))
);
