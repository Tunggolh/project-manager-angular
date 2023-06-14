import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailsComponent } from './products/product-detail/product-detail.component';
import { ProductFormComponent } from './products/product-form/product-form.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { ProductService } from './products/product.service';

import { RouterModule, Routes } from '@angular/router';
import { ProductStartComponent } from './products/product-start/product-start.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { FormsModule } from '@angular/forms';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductStartComponent,
      },
      { path: 'create', component: ProductFormComponent },
      { path: ':id', component: ProductDetailsComponent },
      { path: ':id/edit', component: ProductFormComponent },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    ProductItemComponent,
    ProductsComponent,
    DeleteDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
