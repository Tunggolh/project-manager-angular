import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/products/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: Product;
  @Input() index: number;

  constructor(private router: Router, private route: ActivatedRoute) {}

  isActiveLink() {
    return (
      this.router.url === `/products/${this.index}` ||
      this.router.url.startsWith(`/products/${this.index}/`)
    );
  }
}
