import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-register',
  templateUrl: './author-register.component.html',
  styleUrls: ['./author-register.component.css']
})
export class AuthorRegisterComponent {
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
    this.http.post("http://localhost:8091/api/author/register", bodyData,{responseType:'text'}).subscribe((resultData:any)=>
    {
      console.log(resultData);
      alert("Author Registered Successfully");
      this.router.navigate(['/author-home']);
    });
  }
}