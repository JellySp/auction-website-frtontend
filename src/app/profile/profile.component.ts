import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../shared/services/user.service';
import {User} from '../shared/models/user';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userId: number;
  user: User;

  constructor(private userService: UserService, private snackbar: MatSnackBar, private formBuilder: FormBuilder) {
  }
  profileGroup: FormGroup;

  ngOnInit(): void {
    this.profileGroup = this.formBuilder.group({
      username: '',
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      phoneNumber: '',
      password: ''
    });
  }

  getUserById(id: number) {
    this.userService.getUserDetails(this.userId).subscribe(value => this.userId = id);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(this.userId).subscribe(value => this.userId = id);
  }
  updateUser(): void {
    const user = new User(this.profileGroup.get('id').value, this.profileGroup.get('username').value, this.profileGroup.get('firstName').value, this.profileGroup.get('lastName').value, this.profileGroup.get('address').value, this.profileGroup.get('email').value, this.profileGroup.get('phoneNumber').value, this.profileGroup.get('password').value, this.profileGroup.get('balance').value);
    this.userService.updateUser(user).subscribe(
      value => window.location.assign('/profile'),
      error => {
        this.snackbar.open(error.error.message.concat(error.error.details[0]), 'close', {
          duration: 6000,
          panelClass: 'snack-error-message'
        });
      }
    );
  }

}
