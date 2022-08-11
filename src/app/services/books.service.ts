import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  baseUrl = 'https://openlibrary.org'

  constructor(private http: HttpClient) { }

  search(type: string, term: string, page: number): Observable<any> {
    const url = `${this.baseUrl}/search.json?${type}=${term}&page=${page}`;
    return this.http.get(url);
  }

  getBook(key: string): Observable<any> {
    const url = `${this.baseUrl}${key}.json`;
    return this.http.get(url);
  }

}
