import { Component, OnInit } from '@angular/core';
import { NavComponent } from '../../shared/components/nav/nav.component';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../../shared/components/card/card.component';
import { PostData } from '../../core/models/post-data';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavComponent,
    CardComponent,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  data!: PostData[]

  ngOnInit() {
    this.data  = [
      {
        id: 'rugiu',
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        image: "https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500",
        likes: 10,
        link: '',
        tags: ['Dog', 'Cat', 'Fish'],
        publishDate: '10-12-2023',
        owner: {
          id: 'dskjsd',
          title: "mr",
          firstName: 'Mary',
          lastName: 'Jane',
          picture: 'https://tailwindcss.com/img/jonathan.jpg'
        }
      },
    //   {
    //     id: 'rugiu',
    //     text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    //     image: "https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500",
    //     likes: 10,
    //     link: '',
    //     tags: ['Dog', 'Cat', 'Fish'],
    //     publishDate: '10-12-2023',
    //     owner: {
    //       id: 'dskjsd',
    //       title: "mr",
    //       firstName: 'Mary',
    //       lastName: 'Jane',
    //       picture: 'https://tailwindcss.com/img/jonathan.jpg'
    //     }
    //   }
    //   // {
    //   //   id: 'rugiu',
    //   //   text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    //   //   image: "https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500",
    //   //   likes: 10,
    //   //   link: '',
    //   //   tags: ['Dog', 'Cat', 'Fish'],
    //   //   publishDate: '10-12-2023',
    //   //   owner: {
    //   //     id: 'dskjsd',
    //   //     title: "mr",
    //   //     firstName: 'Mary',
    //   //     lastName: 'Jane',
    //   //     picture: 'https://tailwindcss.com/img/jonathan.jpg'
    //   //   }
    //   // }
    ];
    console.log(this.data)
  }
}
