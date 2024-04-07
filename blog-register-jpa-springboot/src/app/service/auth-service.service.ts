import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../model/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient, private router:Router) { }

  login(auth:Auth){
    return this.http.post('http://localhost:8080/api/auth/login', auth)
  }

  register(auth:Auth){
    return this.http.post('http://localhost:8080/api/auth/register', auth)
  }

  isLoggedIn(){
    return localStorage.getItem('username')!== null;
  }

  isAdmin(){
    return localStorage.getItem('admin') == 'true';
  }

  logout(){
    localStorage.removeItem('username');
    localStorage.removeItem('admin');
    this.router.navigate(['/login']);
  }
}