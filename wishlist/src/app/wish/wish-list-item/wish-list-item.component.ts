import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../../shared/models/wishItem';
import { CommonModule } from '@angular/common';
import {EventService} from '../../../shared/services/EventService'


@Component({
  selector: 'wish-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  @Input() wish!: WishItem // -!- means not null / undefined
 
  // @Input() fulfilled!: boolean;
  // @Output() fulfilledChange = new EventEmitter<boolean>();

  get cssClasses() {
    return {'strikeout text-muted': this.wish.isComplete};
  }

  constructor(private events:EventService){}

  removeWish(){
    this.events.emit('removeWish', this.wish)
  }

  toggleFulfilled(){
    this.wish.isComplete = !this.wish.isComplete
  }
}
