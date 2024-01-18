import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/service/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  formData={
    fname:'', 
    lname:'',
    email:'',
    phone:'',
    gender:'',
    dob:'',
    password:'',
    usertype:''
  }

  constructor(private auth:AuthServiceService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let userId=this.auth.register(
      this.formData.fname,
      this.formData.lname,
      this.formData.email,
      this.formData.phone,
      this.formData.gender,
      this.formData.dob,
      this.formData.password,
     );

    if(userId){
      this.router.navigate(['/login'])
    }
  }

  onSubmitAdmin(){
    let userId=this.auth.registerAdmin(
      this.formData.fname,
      this.formData.lname,
      this.formData.email,
      this.formData.phone,
      this.formData.gender,
      this.formData.dob,
      this.formData.password,
     );

    if(userId){
      this.router.navigate(['/login'])
    }
  }

}
