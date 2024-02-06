import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTreeModule } from "@angular/material/tree";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import { MatBadgeModule } from "@angular/material/badge";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { FiltersComponent } from "./pages/home/componets/filters/filters.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,

    MatSidenavModule,
    MatGridListModule,
    
    MatButtonModule,
    MatCardModule,

    MatExpansionModule,
    MatTreeModule,
    MatListModule,
    
    MatTableModule,

    MatSnackBarModule,

    HeaderComponent,
    HomeComponent,
    FiltersComponent,
  ],
  templateUrl: "./app.component.html",

  styles: [],
})
export class AppComponent {
  title = "store";
}
