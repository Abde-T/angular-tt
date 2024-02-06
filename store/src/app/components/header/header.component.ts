import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from "@angular/material/menu";
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    MatToolbarModule,     
    MatIconModule,  
    MatBadgeModule,
    MatMenuModule,

  ],
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

}
