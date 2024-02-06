import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import { Subscription } from "rxjs";
import { StoreService } from "../../../../services/store.service";
import { CommonModule } from "@angular/common";
import {
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle,
} from "@angular/material/expansion";
import { MatListOption, MatSelectionList } from "@angular/material/list";

@Component({
  selector: "app-filters",
  standalone: true,
  imports: [
    CommonModule,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatSelectionList,
    MatListOption,
  ],
  templateUrl: "./filters.component.html",
})
export class FiltersComponent {
  @Output() showCategory = new EventEmitter<string>();
  categories: string[] | undefined = ["shoes","photos"]
  
  categoriesSubscription: Subscription | undefined;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
  }

  // onShowCategory(category: string): void {
  //   this.showCategory.next(category);
  // }

  // ngOnDestroy(): void {
  //   if (this.categoriesSubscription) {
  //     this.categoriesSubscription.unsubscribe();
  //   }
  // }
}
