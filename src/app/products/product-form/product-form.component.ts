import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  id: number;
  editMode = false;
  name: string;
  price: number;
  imagePath: string;
  description: string;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      if (this.editMode) this.initForm();
    });
  }

  private initForm() {
    const product = this.productService.getProduct(this.id);
    console.log(this.name);
    this.name = product.name;
    this.price = product.price;
    this.imagePath = product.imagePath;
    this.description = product.description;
  }

  onSubmit(prodForm: NgForm) {
    if (this.editMode) {
      this.onUpdateProduct(prodForm.value);
      prodForm;
    } else {
      this.onAddProduct(prodForm.value);
    }

    this.onCancel();
  }

  onUpdateProduct(product: Product) {
    this.productService.updateProduct(this.id, product);
  }

  onAddProduct(product: Product) {
    this.productService.addProduct(product);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
