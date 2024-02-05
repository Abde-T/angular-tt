import { Component } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { EventService } from '../../shared/services/EventService';
import { WishService } from './wish.service';
import { catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';

@Component({
  selector: 'app-wish',
  standalone: true,
  imports: [ WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,],
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent {
  items:any=[];
    

  constructor(events:EventService, private wishService: HttpClient){
    events.listen('removeWish', (wish: any)=>{
      let index = this.items.indexOf(wish)
      this.items.splice(index, 1)
    })
  }

  ngOnInit() {
    this.wishService.get<any[]>('assets/wishes.json').pipe(catchError(this.handleError)).subscribe(
      (data:any)=>{
        this.items = data
      },
      (error:any)=>{
        alert(error.message)
      }
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('There is an issue with the client or network:', error.error);
    } else {
      console.error('Server-side error: ', error.error)
    }

    return throwError(() => new Error('Cannot retrieve wishes from the server. Please try again.'));
  } 

  filter: any
}
