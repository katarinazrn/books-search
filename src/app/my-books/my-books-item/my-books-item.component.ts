import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-my-books-item',
  templateUrl: './my-books-item.component.html',
  styleUrls: ['./my-books-item.component.css']
})
export class MyBooksItemComponent implements OnInit {

  @Input() book: any;
  @Output() update: EventEmitter<any>;
  cover: string = '';

  constructor() {
    this.update = new EventEmitter<any>();
  }

  ngOnInit(): void {
    this.setCover();
  }

  updateList(key: any) {
    this.update.emit(key);
  }

  setCover() {
    if (this.book.covers)
      this.cover = `https://covers.openlibrary.org/b/id/${this.book.covers[0]}-S.jpg`;
    else this.cover = './assets/cover.png';
  }

}
