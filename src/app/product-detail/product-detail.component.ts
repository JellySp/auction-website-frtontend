import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../shared/models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  selectedProduct: Product;

  @Input()
  product: Product;
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(product: Product){
    this.selectedProduct = product;
  }

  submitBid() {

  }
}
