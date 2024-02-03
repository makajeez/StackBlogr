import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPostState } from './post.reducer';

export const selectPostState = createFeatureSelector<IPostState>('Posts');

export const selectPosts = createSelector(
  selectPostState,
  (state: IPostState) => state.Posts.data
);
export const total = createSelector(
  selectPostState,
  (state: IPostState) => state.Posts.total
);

export const selectLoading = createSelector(
  selectPostState,
  (state: IPostState) => state.loading
);

export const selectError = createSelector(
  selectPostState,
  (state: IPostState) => state.error
);
