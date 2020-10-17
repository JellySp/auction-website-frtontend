import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private CATEGORY_BASE_URL = 'category';

  constructor(private httpClient: HttpClient) {
  }

  public getAllCategories() {
    return this.httpClient.get<string[]>(this.CATEGORY_BASE_URL);
  }
}
