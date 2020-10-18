import { Component, OnInit } from '@angular/core';
import {Auction} from '../shared/models/auction';
import {ProductService} from '../shared/services/product.service';
import {AuctionService} from '../shared/services/auction.service';
import {LoginService} from '../shared/services/login.service';
import {UserService} from '../shared/services/user.service';
import {Login} from '../shared/models/login';
import {User} from '../shared/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}
