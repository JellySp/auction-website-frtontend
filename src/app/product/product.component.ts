import {Component, OnInit} from '@angular/core';
import {ProductService} from '../shared/services/product.service';
import {Product} from '../shared/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(value => this.products = value);
  }
  onSelect(product: Product){
    this.selectedProduct = product;
  }
}
