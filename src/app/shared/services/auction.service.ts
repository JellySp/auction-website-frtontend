import { Injectable } from '@angular/core';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';
import {Auction} from '../models/auction';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  private AUCTION_BASE_URL = 'auction';

  constructor(private httpClient: HttpClient) { }
  public addAuction(auction: Auction) {
    return this.httpClient.post<Auction>(this.AUCTION_BASE_URL, auction);
  }
  public deleteAuction(id: number) {
    return this.httpClient.delete(this.AUCTION_BASE_URL + id);
  }
}
