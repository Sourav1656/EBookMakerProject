import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ebook } from '../../models/ebook/ebook';

@Injectable({
  providedIn: 'root',
})
export class EbookService {
  private baseURL = 'http://localhost:8095/api/ebook';

  constructor(private httpClient: HttpClient) {}

  getAlleBookList(): Observable<Ebook[]> {
    return this.httpClient.get<Ebook[]>(`${this.baseURL}/allebooks`);
  }

  addToEbooks(bookId: string): Observable<string> {
    return this.httpClient.post<string>(
      `${this.baseURL}/addebook/${bookId}`,
      null
    );
  }

  viewEbook(bookId: string): Observable<Ebook> {
    return this.httpClient.get<Ebook>(`${this.baseURL}/${bookId}`);
  }
}
