import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SignupService} from '../shared/services/signup.service';
import {Signup} from '../shared/models/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private snackbar: MatSnackBar, private formBuilder: FormBuilder, private signupService: SignupService) { }
  signupGroup: FormGroup;
  ngOnInit(): void {
    this.signupGroup = this.formBuilder.group({
      username: '',
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      phoneNumber: '',
      password: ''
    });
  }


  register(): void {
    const signup = new Signup(this.signupGroup.get('username').value, this.signupGroup.get('firstName').value, this.signupGroup.get('lastName').value, this.signupGroup.get('address').value, this.signupGroup.get('email').value, this.signupGroup.get('phoneNumber').value, this.signupGroup.get('password').value);
    this.signupService.validateSignup(signup).subscribe(
      value => window.location.assign('/app'),
      error => {
        this.snackbar.open(error.error.message.concat(error.error.details[0]), 'close', {
          duration: 6000,
          panelClass: 'snack-error-message'
        });
      }
    );
  }
}
