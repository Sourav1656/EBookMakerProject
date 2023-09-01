import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book/book';
import { BooksService } from 'src/app/services/books/books.service';
import { EbookService } from 'src/app/services/ebook/ebook.service';

@Component({
  selector: 'app-create-ebooks',
  templateUrl: './create-ebooks.component.html',
  styleUrls: ['./create-ebooks.component.css'],
})
export class CreateEbooksComponent {
  verifiedbooks: Book[] = [];

  constructor(
    private bookService: BooksService,
    private ebookService: EbookService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getverifiedbooks();
  }

  private getverifiedbooks() {
    this.bookService.getVerifiedBookList().subscribe((data) => {
      this.verifiedbooks = data;
    });
  }

  addToEbooks(bookId: string) {
    this.ebookService.addToEbooks(bookId).subscribe(
      (response) => {
        console.log('Ebook added successfully:', response);
        window.alert('Ebook added successfully!');

        this.bookService.deleteBookById(bookId).subscribe(
          () => {
            console.log('Book deleted successfully after adding to ebooks.');
            this.router.navigate(['/admin-home']);
          },
          (error) => {
            console.error('Error deleting book:', error);
          }
        );
      },
      (error) => {
        console.error('Error adding ebook:', error);
      }
    );
  }
}
