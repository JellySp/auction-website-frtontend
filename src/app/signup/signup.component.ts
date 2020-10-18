import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserService} from '../shared/services/user.service';
import {User} from '../shared/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private snackbar: MatSnackBar, private formBuilder: FormBuilder, private userService: UserService) { }
  signupGroup: FormGroup;
  ngOnInit(): void {
    this.signupGroup = this.formBuilder.group({
      id: undefined,
      username: '',
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      phoneNumber: '',
      password: '',
      balance: ''
    });
  }


  register(): void {
    const user = new User(0, this.signupGroup.get('username').value, this.signupGroup.get('password').value, this.signupGroup.get('firstName').value, this.signupGroup.get('lastName').value, this.signupGroup.get('email').value, this.signupGroup.get('phoneNumber').value, this.signupGroup.get('address').value, this.signupGroup.get('balance').value);
    this.userService.addUser(user).subscribe(
      value => window.location.assign('/welcome'),
      error => {
        this.snackbar.open(error.error.message.concat(error.error.details[0]), 'close', {
          duration: 6000,
          panelClass: 'snack-error-message'
        });
      }
    );
  }
}
