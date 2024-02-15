import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { PostComponent } from './components/posts/post.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { LoadingIndicatorComponent } from './shared/loading-indicator/loading-indicator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    HttpClientModule, 
    RouterOutlet, 
    PostComponent,
    NavComponent,
    LoadingIndicatorComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'StackBlogr';

  ngOnInit() {
    initFlowbite()
  }
}
