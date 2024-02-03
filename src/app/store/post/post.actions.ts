import { createAction, props } from '@ngrx/store';
import { PostData, ReturnedData } from '../../core/models/post-data';

export const loadPosts = createAction('[Posts] Get Posts');
export const loadPostsSuccess = createAction('[Posts] Load Posts Success', props<{ Posts: ReturnedData }>());
export const loadPostsFailure = createAction('[Posts] Load Posts Failure', props<{ error: any }>());