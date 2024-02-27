import { Routes } from '@angular/router';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostComponent } from './components/posts/post.component';
import { postDetailsResolver } from './components/post-details/post-details.resolver';

export const routes: Routes = [
    { path: '', redirectTo: 'posts', pathMatch: 'full'},
    { path: 'posts',  component: PostComponent },
    { 
        path: 'post/:id', 
        component: PostDetailsComponent,
        resolve: {postDetails: postDetailsResolver}
     },
];
