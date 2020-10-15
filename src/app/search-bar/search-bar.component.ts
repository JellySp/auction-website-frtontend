import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {ProductService} from '../shared/services/product.service';
import {Product} from '../shared/models/product';
import {MatTableDataSource} from '@angular/material/table';
import * as moment from 'moment';
import { extendMoment } from 'moment-range';
import {stringify} from 'querystring';
const moment1 = extendMoment(moment);

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})

export class SearchBarComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  products: Product[] = [];
  tempProducts: Product[] = [];
  foundProducts: Product[] = [];
  searchWord = '';
  startDate = '';
  endDate = '';
  displayedColumns = ['title', 'date', 'price', 'start', 'end'];
  dataSource = null;
  error  = '';
  profileLoading = true;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // API

    this.productService.getAllProducts().subscribe(transformedData => {
      for (let i = 0; i < transformedData.length; i++) {
        transformedData[i].endDate = moment(transformedData[i].endDate).format('YYYY-MM-DD');
      }
      this.products = transformedData;
      console.log('Hello', transformedData);

      this.dataSource = new MatTableDataSource(this.products);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  applyFilter(filterValue: string) {
    console.log(filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  applySearch1(searchWord: string) {
    this.searchWord = searchWord;
    this.applyFilter(this.searchWord);

  }
  applySearch2(startDate: string) {
    this.startDate = startDate;

  }
  applySearch3(endDate: string) {
    this.endDate = endDate;
    console.log(this.endDate);

  }

  applySearch() {

    const tempProducts = this.products;
    console.log('tempProducts', tempProducts);
    this.foundProducts = [];
    for (let i = 0; i < this.products.length; i++) {

      if (this.withinRange(this.products[i].endDate)) {
        this.foundProducts.push(this.products[i]);
      }
    }
    console.log(this.foundProducts);
    this.dataSource = new MatTableDataSource(this.foundProducts);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.applyFilter(this.searchWord);

  }
  withinRange(date: string) {
    console.log('Here in withinRange');
    const userdate = moment(date, 'YYYY-MM-DD');
    const endDate = moment(this.endDate, 'YYYY-MM-DD');
    console.log(userdate, endDate);
    const range = moment1.range(endDate.format(typeof stringify(endDate)));
    return range.contains(userdate);

  }



  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }

}
