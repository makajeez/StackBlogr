import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CardComponent } from '../../shared/components/card/card.component';
import { PostData, ReturnedData } from '../../core/models/post-data';
import { PostService } from '../../core/services/post.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule} from '@angular/forms';
import { CommentService } from '../../core/services/comment.service';
import { initFlowbite } from 'flowbite';

import { Store, } from '@ngrx/store';
import { loadPosts } from '../../store/post/post.actions';
import { selectPosts, limit, total, page } from '../../store/post/post.selectors';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";


@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CardComponent,
    MatProgressSpinnerModule
  ],
  providers: [ PostService, CommentService],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  currentPost!: PostData;
  postData = this.store.select(selectPosts)
  total$ = this.store.select(total);
  limit$ = this.store.select(limit)
  page$ = this.store.select(page)
  totalData: number = 0
  page: number = 0
  limit: number = 0;
  addPostFormGroup!: FormGroup;
  editPostFormGroup!: FormGroup;
  postService = inject(PostService)
  commentService = inject(CommentService)

  constructor(private _fb: FormBuilder, private router: Router, private store: Store) {
    initFlowbite();

    this.addPostFormGroup = this._fb.group({
      text: ['', [Validators.required, Validators.maxLength(50)]],
      image: ['', Validators.required],
      likes: [0, ],
      tags: [["shopping", 'shoes','men'], Validators.required],
      owner: ['60d0fe4f5311236168a10a1e', Validators.required], //Niklas
    })
    this.editPostFormGroup = this._fb.group({
      // id: '',
      text: ['', [Validators.required, Validators.maxLength(50)]],
      image: ['', Validators.required],
      likes: ['', Validators.required],
      tags: ['', Validators.required]
    })
  }
  ngOnInit() {
    this.store.dispatch(loadPosts());    
  }
  
  getPosts(page: number = 1, limit: number = 10) {
   
  }

  deletePost(id: string) {
    
  }

  addPost() {
    
  }

  updatePost() {
    
  }

  getUrl(event: any) {
    this.addPostFormGroup.controls['image'].setValue(event.target.src)
    this.editPostFormGroup.controls['image'].setValue(event.target.src)
  }
  
  getData(post: any){  
    this.editPostFormGroup.patchValue(post)
    this.currentPost = post;
  }

  fetchPostDetails(post: PostData){
    this.router.navigate(['/post', post.id],)
  }

  truncNum(num: number){
    return num >= 10? "9+": num;
  }

}

