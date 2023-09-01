import { HttpClient } from '@angular/common/http';

import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({

  selector: 'app-update-book',

  templateUrl: './update-book.component.html',

  styleUrls: ['./update-book.component.css']

})

export class UpdateBookComponent {

  bookname: string="";

 

  bookcontent: string="";

 

  constructor(private router:Router,private http: HttpClient)

 

  {

 

 

 

  }

 

 

 

  save()

 

  {

 

    let bodyData={

 

      "bookname":this.bookname,

 

      "bookcontent":this.bookcontent,

 

    };

 

    this.http.post("http://localhost:8094/api/bookcontent/update", bodyData,{responseType:'text'}).subscribe((resultData:any)=>

 

    {

 

      console.log(resultData);

 

      alert("Content updated Successfully");

 

      this.router.navigate(['/author-home']);

 

    });

 

  }

}

 