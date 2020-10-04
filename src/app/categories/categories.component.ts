import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  Categories: string[] = [
    'Automobiles', 'Art', 'Books & Comics', 'Cars', 'Drinks', 'Electronics', 'Fashion', 'Furniture',
    'home tech', 'Houses', 'Jewellery & Watches', 'Music', 'Sports & Events', 'Toys & Models'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
