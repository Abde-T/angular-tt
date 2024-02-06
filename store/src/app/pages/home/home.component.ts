import { Component } from "@angular/core";
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
} from "@angular/material/sidenav";
import { ProductsHeaderComponent } from "./componets/products-header/products-header.component";
import { FiltersComponent } from "./componets/filters/filters.component";


const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };


@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    ProductsHeaderComponent,
    MatDrawerContainer,
    MatDrawer,
    MatDrawerContent,
    FiltersComponent,
  ],
  templateUrl: "./home.component.html",
  styles: ``,
})

export class HomeComponent {

  cols = 3;
  rowHeight: number = ROWS_HEIGHT[this.cols];
  count = '12';
  sort = 'desc';
  category: string | undefined;


  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROWS_HEIGHT[colsNum];
  }

  onItemsCountChange(count: number): void {
    this.count = count.toString();
  }

  onSortChange(newSort: string): void {
    this.sort = newSort;
  }

}
