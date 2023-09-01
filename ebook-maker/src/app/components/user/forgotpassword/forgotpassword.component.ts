import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {

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
    this.http.post("http://localhost:8090/api/user/update", bodyData,{responseType:'text'}).subscribe((resultData:any)=>
    {
      console.log(resultData);
      alert("Details Updated Successfully");
      this.router.navigate(['/login']);
    });
  }
}
