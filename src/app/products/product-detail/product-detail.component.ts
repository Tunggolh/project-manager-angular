import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DeleteDialogComponent } from 'src/app/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  id: number;
  product: Product;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.product = this.productService.getProduct(this.id);

      if (!this.product) {
        this.router.navigate(['/not-found']);
      }
    });
  }

  openDialog() {
    this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: { id: this.id },
    });
  }

  onEditMode() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
    });
  }

  ngOnDestroy(): void {}
}
