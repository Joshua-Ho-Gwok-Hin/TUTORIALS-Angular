import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/model/auth';
import { AuthServiceService } from 'src/app/service/auth-service.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
  
})
export class RegisterComponent implements OnInit {

  auth: Auth={
    username: '',
    password: '',
    
  };

  constructor(private authService:AuthServiceService, private router: Router) { }

  ngOnInit(): void {

  }

  register(){
    this.authService.register(this.auth).subscribe({
      next:(response: any)=>{
        console.log(response);
        this.router.navigate(['/login']);
      },
      error:(error: any)=>{
        console.log(error);
      },
      
    });
  }

}
