import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css'],
})
export class CreatebookComponent {
  id: string = '';
  authorId: string = '';
  authorName: string = '';
  description: string = '';
  genre: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  save() {
    let bodyData = {
      id: this.id,
      authorId: this.authorId,
      authorName: this.authorName,
      description: this.description,
      genre: this.genre, // Assuming this.genre is a space-separated string
    };

    this.http
      .post('http://localhost:8093/api/book/createbook', bodyData, {
        responseType: 'text',
      })
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Book Added Successfully');
        this.router.navigate(['/update-book']);
      });
  }
}
