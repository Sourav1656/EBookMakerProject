import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book/book';
import { BooksService } from 'src/app/services/books/books.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css'],
})
export class MyBooksComponent {
  books: Book[] = [];
  authorId!: string | null;

  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService
  ) {}

  ngOnInit() {
    this.fetchBooks();
  }
  fetchBooks() {
    this.route.paramMap.subscribe((params) => {
      this.authorId = params.get('authorId');

      if (this.authorId !== null) {
        this.booksService.getBooksByAuthorId(this.authorId).subscribe(
          (data) => {
            this.books = data;
          },
          (error) => {
            console.error('Error fetching books:', error);
          }
        );
      } else {
        console.error('Author ID not found in the URL.');
      }
    });
  }

  deleteBook(bookId: string) {
    this.booksService.deleteBookById(bookId).subscribe(
      () => {
        console.log('Book deleted successfully from books.');
        this.fetchBooks();
      },
      (error) => {
        console.error('Error deleting book:', error);
      }
    );
  }

  setComplete(bookId: string) {
    this.booksService.setBookCompleted(bookId).subscribe(
      () => {
        console.log('Book completed successfully.');
        window.alert('Book with name - ' + bookId + ' completed successfully!');
        this.fetchBooks();
      },

      (error) => {
        console.error('Error completing book:', error);
      }
    );
  }
}
