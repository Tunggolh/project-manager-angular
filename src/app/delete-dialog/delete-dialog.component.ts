import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../products/product.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.css'],
})
export class DeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    public productService: ProductService,
    @Inject(MAT_DIALOG_DATA) private data: { id: number },
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onDelete() {
    this.productService.deleteProduct(this.data.id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
