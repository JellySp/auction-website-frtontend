import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ProductService} from '../../shared/services/product.service';
import {Product} from '../../shared/models/product';
import {CategoryService} from '../../shared/services/category.service';
import {AuctionService} from '../../shared/services/auction.service';
import {LoginService} from '../../shared/services/login.service';
import {Auction} from '../../shared/models/auction';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private snackbar: MatSnackBar, private formBuilder: FormBuilder, private productService: ProductService,
              private categoryService: CategoryService, private auctionService: AuctionService,
              private loginService: LoginService) {
  }

  productGroup: FormGroup;
  auctionGroup: FormGroup;
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
    this.auctionGroup = this.formBuilder.group({
      name: '',
      category: '',
      description: '',
      price: '',
      auctionDate: '2',
      endDate: '',
      seller: 'jj',
      buyer: ''
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

  startAuction(): void{
    const newAuction = new Auction(0, this.auctionGroup.get('name').value, this.auctionGroup.get('category').value, this.auctionGroup.get('description').value, this.auctionGroup.get('price').value, this.auctionGroup.get('auctionDate').value, this.auctionGroup.get('endDate').value, this.auctionGroup.get('seller').value, this.auctionGroup.get('buyer').value);
    console.log(newAuction);
    newAuction.seller = this.loginService.getUserData().username;
    this.auctionService.addAuction(newAuction).subscribe(value => window.location.assign('welcome'),
      error => {
        this.snackbar.open(error.error.message.concat(error.error.detail[0]), 'close', {
          duration: 6000,
          panelClass: 'snack-error-message'
        });
      });
  }

}
