import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorService {
  private baseURL = 'http://localhost:8091/api/author';
  constructor(private httpClient: HttpClient) {}

  verifyAuthor(authorEmail: string): Observable<any> {
    return this.httpClient.post<any>(
      `${this.baseURL}/authorize/${authorEmail}`,
      null
    );
  }
}
