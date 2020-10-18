import {User} from './user';

export class Auction {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  auctionDate: string;
  endDate: string;
  seller: string;
  buyer: string;

  constructor(id: number, name: string, category: string, description: string, price: number, auctionDate: string, endDate: string, seller: string, buyer: string) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.description = description;
    this.price = price;
    this.auctionDate = auctionDate;
    this.endDate = endDate;
    this.seller = seller;
    this.buyer = buyer;
  }
}
