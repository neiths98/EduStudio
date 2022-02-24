import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { localStorageConstants } from '../constants/localStorage.constant';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _signUpUrl = 'http://localhost:3000/user/sign-up';
  private _loginUrl = 'http://localhost:3000/user/sign-in';
  private jwtHelper = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  signUpUser(email: string, password: string) {
    const userData = { email, password };
    return this.http.post<any>(this._signUpUrl, userData);
  }

  loginUser(email: string, password: string) {
    const userData = { email, password };
    return this.http.post<any>(this._loginUrl, userData).pipe(
      map((response) => {
        if (response.token) {
          localStorage.setItem(localStorageConstants.authToken, response.token);
          this.router.navigate(['courses']);
        }
        return response;
      })
    );
  }

  isLoggedIn(): boolean {
    const authToken = localStorage.getItem(localStorageConstants.authToken);
    // FIXME: -> isTokenExpired() dando erro quando token não é válido
    //  - ocasiona erro no redirect de AuthGuard (tela em branco)
    //  - ocasiona erro nos botões do Header (função isLoggedIn() não retorna nem true nem false)
    if (authToken)
      return !this.jwtHelper.isTokenExpired(authToken);
    return false;
  }

}
