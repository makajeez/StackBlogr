import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../core/services/post.service';
import { PostData } from '../../core/models/post-data';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent implements OnInit{

  data$!: PostData;


  constructor(
    private activateRoute: ActivatedRoute,
    private postService: PostService
    ) {

  }
  
  ngOnInit() {
    let id = this.activateRoute.snapshot.paramMap.get('id');
    
     this.postService.getPost(`${id}`).subscribe({
      next: data => {
        this.data$ = data;
      }
    })
    // this.activateRoute.data.subscribe({
    //   next: (data: any) => {
    //     this.data$ = data
    //   }
    // })
  }
}
