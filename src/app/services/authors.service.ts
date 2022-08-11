import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  baseUrl: string = 'https://openlibrary.org';

  constructor(private http: HttpClient) { }

  getAuthor(key: string): Observable<any> {
    return this.http.get(`${this.baseUrl}${key}.json`);
  }

  search(term: string, page: number): Observable<any> {
    const url = `${this.baseUrl}/search/authors.json?q=${term}&page=${page}`;
    return this.http.get(url);
  }
}
