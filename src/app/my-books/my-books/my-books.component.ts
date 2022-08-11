import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { MyBooksService } from 'src/app/services/my-books.service';

@Component({
  selector: 'app-my-books',
  templateUrl: './my-books.component.html',
  styleUrls: ['./my-books.component.css']
})
export class MyBooksComponent implements OnInit {

  wantToRead: any = [];
  reading: any = [];
  finished: any = [];

  wantToReadCollapsed: boolean = false;
  readingCollapsed: boolean = false;
  finishedCollapsed: boolean = false;

  constructor(private myBooksService: MyBooksService, private bookService: BooksService) { }

  ngOnInit(): void {
    this.getWantToReadBooks();
    this.getReadingBooks();
    this.getFinishedBooks();
  }

  getWantToReadBooks() {
    this.myBooksService.getWantToReadBooks().subscribe((keys: any) => {
      keys.forEach((key: string) => {
        this.bookService.getBook(key).subscribe(book => this.wantToRead.push(book));
      });
    });
  }

  getReadingBooks() {
    this.myBooksService.getReadingBooks().subscribe((keys: any) => {
      keys.forEach((key: string) => {
        this.bookService.getBook(key).subscribe(book => this.reading.push(book));
      });
    });
  }

  getFinishedBooks() {
    this.myBooksService.getFinishedBooks().subscribe((keys: any) => {
      keys.forEach((key: string) => {
        this.bookService.getBook(key).subscribe(book => this.finished.push(book));
      });
    });
  }

  updateList(data: any) {
    switch (data.action) {
      case 'addToWantToRead':
        this.addToWantToRead(data.key);
        break;
      case 'removeFromWantToRead':
        this.removeFromWantToRead(data.key);
        break;
      case 'addToReading':
        this.addToReading(data.key);
        break;
      case 'removeFromReading':
        this.removeFromReading(data.key);
        break;
      case 'addToFinished':
        this.addToFinished(data.key);
        break;
      case 'removeFromFinished':
        this.removeFromFinished(data.key);
        break;
      default:
        break;
    }
  }

  addToWantToRead(key: string) {
    this.bookService.getBook(key).subscribe(book => this.wantToRead.push(book));
    this.removeFromFinished(key);
    this.removeFromReading(key);
  }

  removeFromWantToRead(key: string) {
    this.wantToRead = this.wantToRead.filter((book: any) => book.key != key);
  }

  addToReading(key: string) {
    this.bookService.getBook(key).subscribe(book => this.reading.push(book));
    this.removeFromWantToRead(key);
    this.removeFromFinished(key);
  }

  removeFromReading(key: string) {
    this.reading = this.reading.filter((book: any) => book.key != key);
  }

  addToFinished(key: string) {
    this.bookService.getBook(key).subscribe(book => this.finished.push(book));
    this.removeFromReading(key);
    this.removeFromWantToRead(key);
  }

  removeFromFinished(key: string) {
    this.finished = this.finished.filter((book: any) => book.key != key);
  }

  toggleCollapseWantToRead() {
    this.wantToReadCollapsed = !this.wantToReadCollapsed;
  }

  toggleCollapseReading() {
    this.readingCollapsed = !this.readingCollapsed;
  }

  toggleCollapseFinished() {
    this.finishedCollapsed = !this.finishedCollapsed;
  }

}
