import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Author } from 'src/app/models/author/author';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private baseURL = 'http://localhost:8092/api/admin';
  constructor(private httpClient: HttpClient) {}

  getUnauthorizedAuthorsList(): Observable<Author[]> {
    return this.httpClient.get<Author[]>(`${this.baseURL}/getunauth`);
  }
}
