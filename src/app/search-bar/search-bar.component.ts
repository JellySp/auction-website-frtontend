import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductService} from '../shared/services/product.service';
import {Product} from '../shared/models/product';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})

export class SearchBarComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'description', 'price', 'endDate'];
  dataSource = null;
  searchWord = '';
  products: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    // API
    this.productService.getProductByName().subscribe(value => this.products = value );
  }

  applyFilter(filterValue: string) {
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applySearch1(searchWord: string) {
    this.searchWord = searchWord;
    // this.applyFilter(this.searchWord);

  }

  applySearch() {

    console.log(this.products);
   // this.applyFilter(this.searchWord);
  }


}
