import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Auth } from 'src/app/model/auth';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth:Auth = {
    username:'',
    password:'',
  }

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.auth).subscribe({
      next: (response: any)=>{
        console.log(response);
        localStorage.setItem('admin', response.admin);
        localStorage.setItem('username', response.username);
        this.router.navigate(['/']);
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

}
