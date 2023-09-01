import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent {
  email: string="";
    password: string=""

    constructor(private router:Router, private  http: HttpClient)
    {
    }

    login(){
      console.log(this.email);
      console.log(this.password);

      let bodyData={
        email:this.email,
        pasword:this.password
      };

      this.http.post("http://localhost:8092/api/admin/login", bodyData).subscribe((resultData:any)=>
      {
        console.log(resultData);
        if(resultData.message=="Invalid Admin Credentials")
        {
          alert("Invalid User Credentials");
        }
        else if(resultData.message=="Login success")
        {
          this.router.navigateByUrl('/');
        }
        else{
          alert("Invalid Admin Credentials");
        }
      });
    }
  }

