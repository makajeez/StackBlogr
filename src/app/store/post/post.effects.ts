import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as postActions from './post.actions';
import { PostService } from '../../core/services/post.service';
import { ReturnedData } from '../../core/models/post-data';

@Injectable()
export class PostEffects {

  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(postActions.loadPosts),
    switchMap(() =>
      this.postService.getPosts().pipe(
        map((Post) => postActions.loadPostsSuccess({ 
          Posts: Post
        })),
        catchError(error => of(postActions.loadPostsFailure({ error })))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private postService: PostService
  ) {}
}
