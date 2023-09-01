import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book/book';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private baseURL = 'http://localhost:8093/api/book';

  constructor(private httpClient: HttpClient) {}

  getNonVerifiedBookList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseURL}/nonverified/books`);
  }

  verifyBook(bookId: string): Observable<any> {
    return this.httpClient.post<any>(
      `${this.baseURL}/setauthorized/${bookId}`,
      null
    );
  }

  getVerifiedBookList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.baseURL}/verified/books`);
  }

  deleteBookById(bookId: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseURL}/deletebook/${bookId}`);
  }

  getBooksByAuthorId(AuthorId: string): Observable<Book[]> {
    return this.httpClient.get<Book[]>(
      `${this.baseURL}/getbyauthid/${AuthorId}`
    );
  }

  setBookCompleted(bookId: string): Observable<string> {

    const url = `${this.baseURL}/setcomplete/${bookId}`;

    return this.httpClient.get<string>(url);

  }
}
