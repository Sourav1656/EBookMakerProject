import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  email: string="";
  username: string="";
  password: string="";
  age: string=""

  constructor(private router:Router,private http: HttpClient)
  {

  }

  save()
  {
    let bodyData={
      "email":this.email,
      "username":this.username,
      "password":this.password,
      "age":this.age
    };
    this.http.post("http://localhost:8090/api/user/register", bodyData,{responseType:'text'}).subscribe((resultData:any)=>
    {
      console.log(resultData);
      alert("User Registered Successfully");
      this.router.navigate(['/user-home']);
    });
  }
}
