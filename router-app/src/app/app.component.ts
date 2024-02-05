import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { Router } from '@angular/router';
import { ProductsListComponent } from './products/products-list/products-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, ProductsListComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router){}

  title = 'router-app';

  goToContact(){
    this.router.navigate(['contact']);
  }
}
