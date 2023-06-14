import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Subscription } from 'rxjs';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription = this.productService.productsChanged.subscribe(
      (products: Product[]) => {
        this.products = products;
      }
    );
    this.products = this.productService.getProducts();
  }

  onAddProductRoute() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
