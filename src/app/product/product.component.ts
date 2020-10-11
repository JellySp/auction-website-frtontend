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

  constructor(private productTableService: ProductService) {
  }

  ngOnInit(): void {
    this.productTableService.getAllProducts().subscribe(value => this.products = value);
  }
}
