import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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

    this.http.post("http://localhost:8090/api/user/login", bodyData).subscribe((resultData:any)=>
    {
      console.log(resultData);
      if(resultData.message=="Invalid User Credentials")
      {
        alert("Invalid User Credentials");
      }
      else if(resultData.message=="Login success")
      {
        this.router.navigateByUrl('/home');
      }
      else{
        alert("Invalid User Credentials");
      }
    });
  }

  
}

