import { Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';

export const routes: Routes = [
    { path: '', component: FirstComponent },
    { path: 'second', component: SecondComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'products', component: ProductsListComponent },
    { path: 'products/:id', component: ProductsDetailsComponent },

    { path: '**', component: NotFoundComponent }, //must be last always
];
