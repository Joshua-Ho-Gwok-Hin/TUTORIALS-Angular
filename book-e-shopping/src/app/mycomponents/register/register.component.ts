import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { Auth } from 'src/app/model/auth';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  static MatchValidator(source: string, target: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const sourceCtrl = control.get(source);
      const targetCtrl = control.get(target);

      return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
        ? { mismatch: true }
        : null;
    };
  }


  auth: Auth = {
    id: 0,
    fname: '',
    lname: '',
    email: '',
    phone: '',
    gender: '',
    dob: new Date,
    password: '',
  }

  registerForm = new FormGroup(
    {

      fname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]+$')]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
    },
    [RegisterComponent.MatchValidator('password', 'confirmPassword')]

  );

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    console.warn(this.registerForm.value)

    this.authService.register(this.auth).subscribe({
      next: (response: any) => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      error: (error: any) => {
        console.log(error);
      },

    });
  }

  registerAdmin() {
    console.warn(this.registerForm.value)

    this.authService.register(this.auth).subscribe({
      next: (response: any) => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      error: (error: any) => {
        console.log(error);
      },

    });
  }

  get fname() {
    return this.registerForm.get('fname')
  }

  get email() {
    return this.registerForm.get('email')
  }

  get phone() {
    return this.registerForm.get('phone')
  }

  get password() {
    return this.registerForm.get('password')
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword')
  }

  get passwordMatchError() {
    return (
      this.registerForm.getError('mismatch') &&
      this.registerForm.get('confirmPassword')?.touched
    );
  }




}
