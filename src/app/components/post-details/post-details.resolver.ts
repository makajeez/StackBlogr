import { Inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, Resolve, RouterStateSnapshot } from '@angular/router';
import { PostService } from '../../core/services/post.service';
import { PostData } from '../../core/models/post-data';
import { Observable } from 'rxjs';

export const postDetailsResolver: ResolveFn<boolean> = (route, state) => {

  const postService = Inject(PostService);
  const id = route.paramMap.get('id');

  return postService.getPost(id);
};

// export class postDetailsResolver implements Resolve<PostData> {

//   constructor(
//     private postService: PostService
//     ){}

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostData> {
//     return this.postService.getPost(`${route.paramMap.get('id')}`)
//   }

// }