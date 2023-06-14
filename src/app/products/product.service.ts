import { Subject } from 'rxjs';
import { Product } from './product.model';

export class ProductService {
  productsChanged = new Subject<Product[]>();
  private products: Product[] = [
    new Product(
      'Pizza',
      800,
      'lLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus architecto omnis id nobis asperiores laborum earum, officia temporibus eveniet voluptatem.',
      'https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ),
    new Product(
      'Burger',
      300,
      'Lorem ipsum dolor sit amet',
      'https://images.pexels.com/photos/3738730/pexels-photo-3738730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ),
  ];

  constructor() {}

  getProducts() {
    return [...this.products];
  }

  getProduct(index: number) {
    return this.products[index];
  }

  addProduct(product: Product) {
    this.products.push(product);
    this.productsChanged.next([...this.products]);
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
    this.productsChanged.next([...this.products]);
  }

  updateProduct(index: number, product: Product) {
    this.products[index] = product;
    this.productsChanged.next([...this.products]);
  }
}
