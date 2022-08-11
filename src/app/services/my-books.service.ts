import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyBooksService {

  wantToRead: any = [];
  finished: any = [];
  reading: any = [];

  constructor() {
    this.initWantToRead();
    this.initFinished();
    this.initReading();
  }

  initWantToRead() {
    let storedBooks: any = localStorage.getItem('wantToRead');
    if (!storedBooks) {
      this.wantToRead = [];
      this.save();
    }
    else {
      this.wantToRead = JSON.parse(storedBooks);
    }
  }

  initFinished() {
    let storedBooks: any = localStorage.getItem('finished');
    if (!storedBooks) {
      this.finished = [];
      this.save();
    }
    else {
      this.finished = JSON.parse(storedBooks);
    }
  }

  initReading() {
    let storedBooks: any = localStorage.getItem('reading');
    if (!storedBooks) {
      this.reading = [];
      this.save();
    }
    else {
      this.reading = JSON.parse(storedBooks);
    }
  }

  getWantToReadBooks(): Observable<any> {
    return of(this.wantToRead);
  }

  addToWantToRead(bookKey: string) {
    this.wantToRead.push(bookKey);
    this.removeFromFinished(bookKey);
    this.removeFromReading(bookKey);
    this.save();
  }

  removeFromWantToRead(bookKey: string) {
    this.wantToRead = this.wantToRead.filter((key: string) => key != bookKey);
    this.save();
  }

  isWantToRead(bookKey: string) {
    return this.wantToRead.some((key: string) => key == bookKey);
  }

  getFinishedBooks(): Observable<any> {
    return of(this.finished);
  }

  addToFinished(bookKey: string) {
    this.finished.push(bookKey);
    this.removeFromReading(bookKey);
    this.removeFromWantToRead(bookKey);
    this.save();
  }

  removeFromFinished(bookKey: string) {
    this.finished = this.finished.filter((key: string) => key != bookKey);
    this.save();
  }

  isFinished(bookKey: string) {
    let res = this.finished.some((key: string) => key == bookKey);
    return res;
  }

  getReadingBooks(): Observable<any> {
    return of(this.reading);
  }

  addToReading(bookKey: string) {
    this.reading.push(bookKey);
    this.removeFromWantToRead(bookKey);
    this.removeFromFinished(bookKey);
    this.save();
  }

  removeFromReading(bookKey: string) {
    this.reading = this.reading.filter((key: string) => key != bookKey);
    this.save();
  }

  isReading(bookKey: string) {
    return this.reading.some((key: string) => key == bookKey);
  }

  save() {
    localStorage.setItem('wantToRead', JSON.stringify(this.wantToRead));
    localStorage.setItem('finished', JSON.stringify(this.finished));
    localStorage.setItem('reading', JSON.stringify(this.reading));
  }

}
