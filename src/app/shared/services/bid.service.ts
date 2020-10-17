import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product';
import {User} from '../models/user';
import {Bid} from '../models/bid';

@Injectable({
  providedIn: 'root'
})
export class BidService {
  private BID_BASE_URL = 'bid';

  constructor(private httpClient: HttpClient) { }

  public getBid(productId: number) {
    return this.httpClient.get(this.BID_BASE_URL + productId);
  }
  public addBid(bid: Bid) {
    return this.httpClient.post(this.BID_BASE_URL, bid);
  }
}
