import { Component, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {

  @Input() post!: Post;

}
