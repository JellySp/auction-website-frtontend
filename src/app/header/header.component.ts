import {Component, OnInit} from '@angular/core';
import {LoginService} from '../shared/services/login.service';
import {Login} from '../shared/models/login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.isLogged = false;
    if (localStorage.getItem('isLoginValid') === 'true') {
      this.isLogged = true;
    }
  }

}
