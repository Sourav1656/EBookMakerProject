import { Component } from '@angular/core';
import { Book } from 'src/app/models/book/book';
import { BooksService } from 'src/app/services/books/books.service';

@Component({
  selector: 'app-book-verification',
  templateUrl: './book-verification.component.html',
  styleUrls: ['./book-verification.component.css'],
})
export class BookVerificationComponent {
  nonverifiedbooks: Book[] = [];

  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.getnonverifiedbooks();
  }

  private getnonverifiedbooks() {
    this.bookService.getNonVerifiedBookList().subscribe((data) => {
      this.nonverifiedbooks = data;
    });
  }

  verifyBook(nonverifiedbook: Book) {
    if (!nonverifiedbook.completed) {
      window.alert('Book must be completed before it can be verified.');
      return;
    }

    this.bookService.verifyBook(nonverifiedbook.id).subscribe(
      (updatedNonVerifiedBooks) => {
        nonverifiedbook.verified = true;
        this.nonverifiedbooks = updatedNonVerifiedBooks;
        window.alert('Book verified successfully!');
        window.location.reload();
      },
      (error) => {
        console.error('Error verifying book:', error);
      }
    );
  }
}
