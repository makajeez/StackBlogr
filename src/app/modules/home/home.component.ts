import { Component, inject, OnInit } from '@angular/core';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../../shared/components/card/card.component';
import { PostData, ReturnedData } from '../../core/models/post-data';
import { PostService } from '../../core/services/post.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
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
  postService = inject(PostService)

  constructor(private _fb: FormBuilder) {
    this.getPosts()
  }
  log(post: any) {
    console.log(post)
  }
  ngOnInit() {

    this.addPostFormGroup = this._fb.group({
      text: ['', [Validators.required, Validators.maxLength(50)]],
      image: ['', [Validators.required, Validators.maxLength(50)]],
      likes: ['', [Validators.required, Validators.maxLength(50)]],
      tags: ['', [Validators.required, Validators.maxLength(50)]],
      owner: ['', [Validators.required, Validators.maxLength(50)]],
    })


      // this.postData  = [
      // {
      //     "id": "60d21bad67d0d8992e610daf",
      // "image": "https://img.dummyapi.io/photo-1568480541687-16c2f73eea4c.jpg",
      // "likes": 12,
      // "tags": [
      // "dog",
      // "beach",
      // "shoreline"
      // ],
      // "text": "Gratitude short-coated tan dog on seashore",
      // "publishDate": "2020-05-22T06:33:02.593Z",
      // "owner": {
      // "id": "60d0fe4f5311236168a109dd",
      // "title": "mr",
      // "firstName": "Miguel",
      // "lastName": "Lima",
      // "picture": "https://randomuser.me/api/portraits/med/men/31.jpg"
      // }
      //   },
      // {
      //       "id": "60d21bee67d0d8992e610e79",
      // "image": "https://img.dummyapi.io/photo-1517884467367-ac2e21e46d0b.jpg",
      // "likes": 43,
      // "tags": [
      // "pet",
      // "canine",
      // "grey"
      // ],
      // "text": "@adventure.yuki peekaboo adult short-coated black ...",
      // "publishDate": "2020-05-22T03:10:54.820Z",
      // "owner": {
      // "id": "60d0fe4f5311236168a109e6",
      // "title": "miss",
      // "firstName": "Milla",
      // "lastName": "Pollari",
      // "picture": "https://randomuser.me/api/portraits/med/women/89.jpg"
      // }
      //   },
      // {
      //       "id": "60d21bd267d0d8992e610e21",
      // "image": "https://img.dummyapi.io/photo-1548658146-f142deadf8f7.jpg",
      // "likes": 92,
      // "tags": [
      // "dog",
      // "grey",
      // "puppy"
      // ],
      // "text": "front view of black and white puppy sitting on bro...",
      // "publishDate": "2020-05-21T22:15:26.266Z",
      // "owner": {
      // "id": "60d0fe4f5311236168a10a12",
      // "title": "mr",
      // "firstName": "Kenneth",
      // "lastName": "Carter",
      // "picture": "https://randomuser.me/api/portraits/med/men/40.jpg"
      // }
      //   },
      // {
      //       "id": "60d21b1a67d0d8992e610c05",
      // "image": "https://img.dummyapi.io/photo-1535008652995-e95986556e32.jpg",
      // "likes": 15,
      // "tags": [
      // "human",
      // "ocean",
      // "nature"
      // ],
      // "text": "Random man walking with his dogs man and dogs on t...",
      // "publishDate": "2020-05-21T15:53:26.275Z",
      // "owner": {
      // "id": "60d0fe4f5311236168a109e7",
      // "title": "mr",
      // "firstName": "Joey",
      // "lastName": "Oliver",
      // "picture": "https://randomuser.me/api/portraits/med/men/61.jpg"
      // }
      //   },
      // {
      //       "id": "60d21be267d0d8992e610e52",
      // "image": "https://img.dummyapi.io/photo-1580734075803-ac9cdb54fb03.jpg",
      // "likes": 3,
      // "tags": [
      // "dog",
      // "canine",
      // "animal"
      // ],
      // "text": "Majestic looking dog on a lake white and brown sho...",
      // "publishDate": "2020-05-21T15:15:02.703Z",
      // "owner": {
      // "id": "60d0fe4f5311236168a109e3",
      // "title": "mr",
      // "firstName": "Vetle",
      // "lastName": "Aasland",
      // "picture": "https://randomuser.me/api/portraits/med/men/97.jpg"
      // }
      //   },
      // {
      //       "id": "60d21b3667d0d8992e610c56",
      // "image": "https://img.dummyapi.io/photo-1558556249-076e42967a24.jpg",
      // "likes": 27,
      // "tags": [
      // "dog",
      // "animal",
      // "canine"
      // ],
      // "text": "two puppies next to each other",
      // "publishDate": "2020-05-21T07:03:58.248Z",
      // "owner": {
      // "id": "60d0fe4f5311236168a10a1a",
      // "title": "mr",
      // "firstName": "Vaino",
      // "lastName": "Sakala",
      // "picture": "https://randomuser.me/api/portraits/med/men/56.jpg"
      // }
      //   },
      // {
      //       "id": "60d21b0767d0d8992e610bcf",
      // "image": "https://img.dummyapi.io/photo-1556526588-a0bd9b5a42c3.jpg",
      // "likes": 54,
      // "tags": [
      // "canine",
      // "dog",
      // "pet"
      // ],
      // "text": "two white dogs",
      // "publishDate": "2020-05-21T02:10:33.421Z",
      // "owner": {
      // "id": "60d0fe4f5311236168a109fa",
      // "title": "ms",
      // "firstName": "Ann",
      // "lastName": "Mason",
      // "picture": "https://randomuser.me/api/portraits/med/women/18.jpg"
      // }
      //   },
      // {
      //       "id": "60d21afd67d0d8992e610bad",
      // "image": "https://img.dummyapi.io/photo-1575495679620-2ff225c75d5a.jpg",
      // "likes": 20,
      // "tags": [
      // "pet",
      // "animal",
      // "mammal"
      // ],
      // "text": "A picture of my golden doodle, Yogi Bear white dog",
      // "publishDate": "2020-05-20T21:49:33.321Z",
      // "owner": {
      // "id": "60d0fe4f5311236168a10a2c",
      // "title": "mr",
      // "firstName": "Toralf",
      // "lastName": "Streicher",
      // "picture": "https://randomuser.me/api/portraits/med/men/80.jpg"
      // }
      //   },
      // {
      //       "id": "60d21b0467d0d8992e610bc5",
      // "image": "https://img.dummyapi.io/photo-1549937334-e94f33e69787.jpg",
      // "likes": 5,
      // "tags": [
      // "dog",
      // "pet",
      // "mammal"
      // ],
      // "text": "long-coated brown dog",
      // "publishDate": "2020-05-20T21:00:40.371Z",
      // "owner": {
      // "id": "60d0fe4f5311236168a10a0d",
      // "title": "mr",
      // "firstName": "Lyam",
      // "lastName": "Morin",
      // "picture": "https://randomuser.me/api/portraits/med/men/95.jpg"
      // }
      //   },
      // {
      //       "id": "60d21bf367d0d8992e610e88",
      // "image": "https://img.dummyapi.io/photo-1564849444446-f876dcef378e.jpg",
      // "likes": 40,
      // "tags": [
      // "plant",
      // "mammal",
      // "pet"
      // ],
      // "text": "A feral cat short-fur gray and orange cat on green...",
      // "publishDate": "2020-05-20T18:51:23.478Z",
      // "owner": {
      // "id": "60d0fe4f5311236168a109f4",
      // "title": "mr",
      // "firstName": "Benjamin",
      // "lastName": "Holland",
      // "picture": "https://randomuser.me/api/portraits/med/men/58.jpg"
      // }
      //   }
      // ]  
      
  }
  
  getPosts(page: number = 1, limit: number = 10) {
    return this.postService.getPosts(page, limit).subscribe({
      next: (data : ReturnedData) => {
       this.postData = data.data;
       this.totalData = data.total;
       this.limit = data.limit;
       this.page = data.page;
       console.log(data)
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
        // console.log(data)
      },
      error: error => {
        console.error(error)
      }
    })
  }

  addPost() {
    this.postService.createPost().subscribe({
      next: data => {
        this.getPosts()
        // console.log(data)
      },
      error: error => {
        console.error(error)
      }
    })
  }
}
