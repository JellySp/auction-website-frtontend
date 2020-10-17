
export class Auction {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  endDate: string;
  seller: undefined;
  buyer: undefined;

  constructor(id: number, name: string, category: string, description: string, price: number, endDate: string, seller: undefined, buyer: undefined) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.description = description;
    this.price = price;
    this.endDate = endDate;
    this.seller = seller;
    this.buyer = buyer;
  }
}
