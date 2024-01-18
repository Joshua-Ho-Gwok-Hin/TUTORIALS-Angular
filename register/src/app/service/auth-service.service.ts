import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  users = [

    { 
      id: 1, 
      fname: "John", 
      lname: "Williams", 
      email: "john@williams.com", 
      phone: "987654321", 
      gender: "male", 
      dob: "31-12-2000", 
      password: "password",
      usertype: "customer"
    },
    { 
      id: 2, 
      fname: "Peter", 
      lname: "Parker", 
      email: "peter@parker.com", 
      phone: "987654321", 
      gender: "male", 
      dob: "31-12-2000", 
      password: "password",
      usertype: "customer"
    },
    { 
      id: 3, 
      fname: "James", 
      lname: "Bond", 
      email: "james@bond.com", 
      phone: "987654321", 
      gender: "male", 
      dob: "31-12-2000", 
      password: "password",
      usertype: "admin"
    },
  ];

  loggeruser = { id: 1, fname: "John", email: "john@gmail.com", password: "password" }

  constructor(private router: Router) { }

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

  register(fname: string, lname: string, email: string, phone: string, gender: string, dob: string, password: string) {
    this.users.push({
      id: this.users.length + 1,
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      gender: gender,
      dob: dob,
      password: password,
      usertype: "customer"
    });
    return this.users.length;
  }

  registerAdmin(fname: string, lname: string, email: string, phone: string, gender: string, dob: string, password: string) {
    this.users.push({
      id: this.users.length + 1,
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      gender: gender,
      dob: dob,
      password: password,
      usertype: "admin"
    });
    return this.users.length;
  }

  login(email: string, password: string) {
    let userId = null;
    for (let user of this.users) {
      if (user.email === email && user.password === password) {
        this.loggeruser = user;
        userId = user.id;
      }
    }
    return userId;
  }

  getUserName() {
    return this.loggeruser.fname ;
  }
}
