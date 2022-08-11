import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from '../services/authors.service';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: any = {};
  cover: string = '';

  constructor(private route: ActivatedRoute, private bookService: BooksService, private authorService: AuthorsService) { }

  ngOnInit(): void {

    const type = this.route.snapshot.paramMap.get('type');
    const key = this.route.snapshot.paramMap.get('key');

    if (key) this.bookService.getBook(`/${type}/${key}`)
      .subscribe(book => {
        this.book = book;
        this.setCover(this.book.covers);
        this.setAuthorsDetails();
      });
  }

  setCover(covers: any) {
    if (covers)
      this.cover = `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`;
    else this.cover = './assets/cover.png';
  }

  setAuthorsDetails() {
    this.book.authors.map((author: any) => {
      this.authorService.getAuthor(author.author.key).subscribe(authorDetails => author.details = authorDetails);
    })
  }

}
