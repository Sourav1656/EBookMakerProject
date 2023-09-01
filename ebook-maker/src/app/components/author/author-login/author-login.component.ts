import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-login',
  templateUrl: './author-login.component.html',
  styleUrls: ['./author-login.component.css']
})
export class AuthorLoginComponent {
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

    this.http.post("http://localhost:8091/api/author/login", bodyData).subscribe((resultData:any)=>
    {
      console.log(resultData);
      if(resultData.message=="Invalid credentials or user does not exists")
      {
        alert("Invalid credentials or user does not exists");
      }
      else if(resultData.message=="Login successfull")
      {
        this.router.navigateByUrl('/home');
      }
      else{
        alert("Invalid credentials or user does not exists");
      }
    });
  }

}
