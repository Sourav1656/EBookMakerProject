import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-forgotpassword',
  templateUrl: './author-forgotpassword.component.html',
  styleUrls: ['./author-forgotpassword.component.css']
})
export class AuthorForgotpasswordComponent {
  email: string="";
  authorname: string="";
  password: string="";
  age: string="";
  about:string="";

  constructor(private router:Router,private http: HttpClient)
  {

  }

  save()
  {
    let bodyData={
      "email":this.email,
      "authorname":this.authorname,
      "password":this.password,
      "age":this.age,
      "about":this.about
    };
    this.http.put("http://localhost:8091/api/author/update", bodyData,{responseType:'text'}).subscribe((resultData:any)=>
    {
      console.log(resultData);
      alert("Details Updated Successfully");
      this.router.navigate(['/author-login']);
    });
  }
}
