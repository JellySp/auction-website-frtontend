import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProductService} from '../../shared/services/product.service';
import {Product} from '../../shared/models/product';
import {CategoryService} from '../../shared/services/category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private snackbar: MatSnackBar, private formBuilder: FormBuilder, private productService: ProductService,
              private categoryService: CategoryService) {
  }

  productGroup: FormGroup;
  categories: string[];

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(value => this.categories = value);

    this.productGroup = this.formBuilder.group({
      name: '',
      category: '',
      description: '',
      price: '',
      endDate: ''
    });


  }

  addProduct(): void {
    const addProduct = new Product(null, this.productGroup.get('name').value, this.productGroup.get('category').value,
      this.productGroup.get('description').value, this.productGroup.get('price').value, this.productGroup.get('endDate').value);

    console.log(addProduct);
    this.productService.addProduct(addProduct).subscribe(
      value => window.location.assign('/welcome'),
      error => {
        this.snackbar.open(error.error.message.concat(error.error.detail[0]), 'close', {
          duration: 6000,
          panelClass: 'snack-error-message'
        });
      });
  }

}
