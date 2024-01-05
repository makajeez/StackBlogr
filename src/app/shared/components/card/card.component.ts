import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common'
import { PostData } from '../../../core/models/post-data';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() postData!: PostData 
}
