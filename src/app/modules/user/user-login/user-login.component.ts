import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { localStorageConstants } from 'src/app/core/constants/localStorage.constant';
import { AuthService } from 'src/app/core/services/auth.service';
import { AlertComponent } from 'src/app/shared/widgets/alert/alert.component';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html'
})
export class UserLoginComponent implements OnInit {

  @ViewChild('alert') alert!: AlertComponent;

  loginFormSubmitted: boolean = false;
  loginFormLoading: boolean = false;
  loginForm!: FormGroup;
  emailField!: FormControl;
  passwordField!: FormControl;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

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
    if (this.loginForm.valid) {
      this.loginFormLoading = true;
      this.authService.loginUser(this.loginForm.value.emailField, this.loginForm.value.passwordField)
        .pipe(
          finalize(() => this.loginFormLoading = false)
        )
        .subscribe({
          next: () => { this.alert.closeAlert() },
          error: (error) => {
            if (error.status === 401) {
              this.alert.closeAlert();
              this.passwordField.setErrors({ incorrectPassword: true });
            }
            if (error.status === 404) {
              this.alert.closeAlert();
              this.emailField.setErrors({ userNotFound: true });
            }
            else
              this.alert.showAlert();
          },
        });
    }
  }

}
