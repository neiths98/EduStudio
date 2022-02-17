import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html'
})
export class UserLoginComponent implements OnInit {

  loginFormSubmitted: boolean = false;
  loginForm!: FormGroup;
  emailField!: FormControl;
  passwordField!: FormControl;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginFormInit();
  }

  loginFormInit() {
    this.emailField = new FormControl('', [Validators.required]);
    this.passwordField = new FormControl('', [Validators.required]);

    this.loginForm = this.fb.group({
      emailField: this.emailField,
      passwordField: this.passwordField,
    });
  }

  loginFormSubmit() {
    this.loginFormSubmitted = true;
  }

}
