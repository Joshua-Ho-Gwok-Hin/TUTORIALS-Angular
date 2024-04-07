import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../model/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  loggeruser = { id: 1, fname: "John", email: "john@gmail.com", password: "password" }


  constructor(private http: HttpClient, private router: Router) { }


  isAuthenticated() {
    if (sessionStorage.getItem('token') != null) {
      return true;
    }
    return false;
  }

  storeToken(token: number) {
    sessionStorage.setItem('token', token.toString());
  }

  removeToken() {
    sessionStorage.removeItem('token');
  }

  canAccess() {
    if (this.isAuthenticated()) {
      this.router.navigate(['dashboard']);
    } else {
      this.router.navigate(['login'])
    }
  }

  register(auth: Auth) {
    return this.http.post('http://localhost:8080/api/auth/register', auth);
  }

  registerAdmin(auth: Auth) {
    return this.http.post('http://localhost:8080/api/auth/register-admin', auth);
  }

  loginUserId(auth: Auth) {
    let httpClientPost = this.http.post('http://localhost:8080/api/auth/login-id', auth);
    this.loggeruser = auth;
    this.storeToken(auth.id)
    return httpClientPost;
  }

  loginEmail(auth: Auth) {
    let httpClientPost = this.http.post('http://localhost:8080/api/auth/login-email', auth);
    this.loggeruser = auth;
    this.storeToken(auth.id)
    return httpClientPost;
  }

  getGreetingName() {
    return localStorage.getItem('fname') + " " + localStorage.getItem('lname');
  }

  isLoggedIn() {
    return localStorage.getItem('email') !== null;
  }

  getId() {
    return localStorage.getItem('id');
  }

  isAdmin() {
    return localStorage.getItem('admin') == 'true';
  }

  logout() {
    this.removeToken();
    localStorage.removeItem('email');
    localStorage.removeItem(`id`); // use back tick?
    localStorage.removeItem('admin');
    localStorage.removeItem('fname');
    localStorage.removeItem('lname');
    this.router.navigate(['/login']);
  }

}
