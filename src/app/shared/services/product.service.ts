import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private ITEM_BASE_URL = 'product';

  constructor(private httpClient: HttpClient) {
  }

  public getAllProducts() {
    return this.httpClient.get<Product[]>(this.ITEM_BASE_URL);
  }

  public getProductByCategory() {
    return this.httpClient.get<Product>(this.ITEM_BASE_URL.concat('/category'));
  }

  public getProductByName() {
    return this.httpClient.get<Product[]>(this.ITEM_BASE_URL.concat('/name'));
  }

  public getProductById() {
    return this.httpClient.get<Product>(this.ITEM_BASE_URL.concat('/id'));
  }

  public addProduct(product: Product) {
    return this.httpClient.post<Product>(this.ITEM_BASE_URL, product);
  }

  public deleteProductById(id: number) {
    return this.httpClient.delete(this.ITEM_BASE_URL + id);
  }

  public updateProduct(username: string, product: Product) {
    return this.httpClient.put<Product>(this.ITEM_BASE_URL + username, product);
  }
  public getAllUserProducts() {
    return this.httpClient.get<Product[]>(this.ITEM_BASE_URL.concat('/user'));
  }

}
