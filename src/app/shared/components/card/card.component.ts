import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'
import { PostData, ReturnedData } from '../../../core/models/post-data';

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
  @Input() post!: PostData 
  // @Output() data: EventEmitter<I>

  sendOutData() {

  }
}
