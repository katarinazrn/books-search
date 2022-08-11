import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { MyBooksService } from 'src/app/services/my-books.service';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit, OnChanges {

  @Input() book: any;
  cover: string = '';

  constructor(private bookService: BooksService, private myBooksService: MyBooksService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setAuthorDetails();
  }

  ngOnInit(): void {
    if (this.book.cover_i)
      this.cover = `https://covers.openlibrary.org/b/id/${this.book.cover_i}-M.jpg`;
    else this.cover = './assets/cover.png';
    this.setAuthorDetails();
  }

  setAuthorDetails() {
    if (!this.book.author_key) {
      this.book.author_details = [{
        author_key: '',
        author_name: 'unknown'
      }]
      return;
    }

    let authors = [];
    for (let i = 0; i < this.book.author_key.length; i++) {
      authors.push({
        author_key: this.book.author_key[i],
        author_name: this.book.author_name[i]
      })
    };
    this.book.author_details = authors;
  }

}
