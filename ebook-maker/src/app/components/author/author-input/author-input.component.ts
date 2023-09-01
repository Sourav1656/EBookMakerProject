import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-input',
  templateUrl: './author-input.component.html',
  styleUrls: ['./author-input.component.css'],
})
export class AuthorInputComponent {
  authorId: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.authorId.trim() !== '') {
      this.router.navigate(['/book-dashboard', this.authorId]);
    }
  }
}
