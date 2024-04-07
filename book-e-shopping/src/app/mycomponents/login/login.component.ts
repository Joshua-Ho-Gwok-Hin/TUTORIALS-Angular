import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/model/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth: Auth = {
    id: 0, fname: '', lname: '',
    email: '', phone: '', dob: new Date(''),
    gender: '', password: '',
  }

  emailLoginForm = new FormGroup({
    validateEmail: new FormControl('', [Validators.required, Validators.email]),
    validatePassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
  })

  userIdLoginForm = new FormGroup({
    validateUserId: new FormControl('', [Validators.required, Validators.pattern('[0-9]+$')]),
    validateIdPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
  })


  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private authService: AuthServiceService,
    private router: Router) {

  }

  ngOnInit(): void {


  }

  loginEmail() {
    // console.warn(this.emailLoginForm.value)
    this.authService.loginEmail(this.auth).subscribe({
      next: (response: any) => {
        console.log(response);
        localStorage.setItem('admin', response.admin);
        localStorage.setItem('email', response.email);
        localStorage.setItem('fname', response.fname);
        localStorage.setItem('lname', response.lname);
        localStorage.setItem('id', response.id);
        this.authService.storeToken(this.auth.id);
        this.authService.canAccess();
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  get validateEmail() {
    return this.emailLoginForm.get('validateEmail')
  }

  get validatePassword() {
    return this.emailLoginForm.get('validatePassword')
  }

  get validateUserId() {
    return this.userIdLoginForm.get('validateUserId')
  }

  get validateIdPassword() {
    return this.userIdLoginForm.get('validateIdPassword')
  }

  loginUserId() {
    // console.warn(this.userIdLoginForm.value)

    this.authService.loginUserId(this.auth).subscribe({
      next: (response: any) => {
        console.log(response);
        localStorage.setItem('admin', response.admin);
        localStorage.setItem('email', response.email);
        localStorage.setItem('fname', response.fname);
        localStorage.setItem('lname', response.lname);
        localStorage.setItem('id', response.id);
        this.authService.storeToken(this.auth.id);
        this.authService.canAccess();
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

}
