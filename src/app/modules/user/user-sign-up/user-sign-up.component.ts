import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppValidators } from 'src/app/shared/widgets/app-forms/validators/app.validators';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html'
})
export class UserSignUpComponent implements OnInit {

  readonly lengthMaxEmail: number = AppValidators.constants.LENGTH_MAX_EMAIL;
  readonly lengthMinPassword: number = AppValidators.constants.LENGTH_MIN_PASSWORD;
  readonly lengthMaxPassword: number = AppValidators.constants.LENGTH_MAX_PASSWORD;

  signUpFormSubmitted: boolean = false;
  signUpForm!: FormGroup;
  emailField!: FormControl;
  passwordField!:FormControl;
  confirmPasswordField!: FormControl; 

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signUpFormInit();
  }

  signUpFormInit() {
    this.emailField = new FormControl('', [
      Validators.required,
      AppValidators.emailPattern(),
      Validators.maxLength(this.lengthMaxEmail)
    ]);

    this.passwordField = new FormControl('', [
      Validators.required,
      Validators.minLength(this.lengthMinPassword),
      Validators.maxLength(this.lengthMaxPassword)
    ]);

    this.confirmPasswordField = new FormControl('', [
      Validators.required,
      AppValidators.isNotEqualTo(this.passwordField)
    ]);

    this.signUpForm = this.fb.group({
      emailField: this.emailField,
      passwordField: this.passwordField,
      confirmPasswordField: this.confirmPasswordField,
    });
  }

  signUpFormSubmit() {
    this.signUpFormSubmitted = true;
  }

}
