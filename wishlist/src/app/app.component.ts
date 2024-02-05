import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';

import {EventService} from '../shared/services/EventService'
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { WishService } from './wish/wish.service';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { WishComponent } from './wish/wish.component';
import { ContactModule } from './contact/contact.module';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterOutlet, WishComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
