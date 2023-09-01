import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-forgotpassword',
  templateUrl: './admin-forgotpassword.component.html',
  styleUrls: ['./admin-forgotpassword.component.css']
})
export class AdminForgotpasswordComponent {

  email: string="";
  username: string="";
  password: string="";

  constructor(private router:Router,private http: HttpClient)
  {

  }

  save()
  {
    let bodyData={
      "email":this.email,
      "username":this.username,
      "password":this.password
    };
    this.http.put("http://localhost:8092/api/admin/update", bodyData,{responseType:'text'}).subscribe((resultData:any)=>
    {
      console.log(resultData);
      alert("Details Updated Successfully");
      this.router.navigate(['/admin-login']);
    });
  }

}
