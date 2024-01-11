import { Component } from '@angular/core';
import { IUser } from '../../../core/models/post-data';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  authenticated: boolean = false;
  currentUser: IUser = {};

}
