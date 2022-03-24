import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
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
  signUpFormLoading: boolean = false;
  signUpForm!: FormGroup;
  emailField!: FormControl;
  passwordField!:FormControl;
  confirmPasswordField!: FormControl; 

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) { }

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
    if (this.signUpForm.valid) {
      this.signUpFormLoading = true;
      this.authService.signUpUser(this.signUpForm.value.emailField, this.signUpForm.value.passwordField)
        .pipe(
          finalize(() => this.signUpFormLoading = false)
        ).subscribe({
          error: (error) => {
            if (error.status === 500)
              this.emailField.setErrors({ userAlreadyExists: true });
          }
        });
    }
  }

}
