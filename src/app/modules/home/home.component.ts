import { Component, inject, OnInit } from '@angular/core';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../../shared/components/card/card.component';
import { PostData, ReturnedData } from '../../core/models/post-data';
import { PostService } from '../../core/services/post.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormsModule, FormControl } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavComponent,
    CardComponent,
    RouterOutlet
  ],
  providers: [ PostService ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  currentPost!: PostData;
  postData!: Array<PostData>
  totalData: number = 0
  page: number = 0
  limit: number = 0
  addPostFormGroup!: FormGroup;
  editPostFormGroup!: FormGroup;
  postService = inject(PostService)

  constructor(private _fb: FormBuilder) {
    // this.getPosts()
  }
  ngOnInit() {

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
  
  getPosts(page: number = 1, limit: number = 10) {
    window.scroll(0,0)
    return this.postService.getPosts(page, limit).subscribe({
      next: (data : ReturnedData) => {
       this.postData = data.data;
       this.totalData = data.total;
       this.limit = data.limit;
       this.page = data.page;
      },
      error: err => {
        console.error(err)
      }
    })
  }

  deletePost(id: string) {
    this.postService.deletePost(id).subscribe({
      next: data => {
        this.getPosts()
        console.log(data)
      },
      error: error => {
        console.error(error)
      }
    })
  }

  addPost() {
    this.postService.createPost(this.addPostFormGroup.value).subscribe({
      next: data => {
        console.log('Form Value: ',this.addPostFormGroup.value)
        this.getPosts()
        console.log('Return Data: ',data)
        this.addPostFormGroup.reset(
          {
            text: '',
            image: '',
            likes: 0,
            tags: ["shopping", 'shoes','men'],
            owner: '60d0fe4f5311236168a10a1e', //Niklas
          }
        )
      },
      error: error => {
        console.error(error)
      }
    })
  }

  updatePost() {
    this.postService.updatePost(this.currentPost.id, this.editPostFormGroup.value)
    .subscribe({
      next: data => {
        console.log('Form Value: ',this.addPostFormGroup.value)
        this.getPosts()
        console.log('Return Data: ',data)
        this.addPostFormGroup.reset(
          {
            text: '',
            image: '',
            likes: 0,
            tags: ["shopping", 'shoes','men'],
            owner: '60d0fe4f5311236168a10a1e', //Niklas
          }
        )
      },
      error: error => {
        console.error(error)
      }
    })
    // console.log(this.currentPost.id, this.editPostFormGroup.value);
    
  }

  getUrl(event: any) {
    this.addPostFormGroup.controls['image'].setValue(event.target.src)
    this.editPostFormGroup.controls['image'].setValue(event.target.src)
  }
  
  getData(post: any){  
    this.editPostFormGroup.patchValue(post)
    this.currentPost = post;
  }
 

}
