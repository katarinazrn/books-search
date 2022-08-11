import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from 'src/app/services/authors.service';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchResult: any = [];
  notFound: any = undefined;
  loading: boolean = false;
  showOptions: boolean = false;

  centerBar: boolean = true;

  numberOfPages: number = 0;
  current: number = 1;

  itemsPerPage: number = 100;

  option: string = 'Title';

  term: string = '';

  constructor(private booksService: BooksService,
    private authorService: AuthorsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.url[0].toString().toLowerCase() === 'books') this.showOptions = true;
  }

  setSelectedOption(option: string) {
    this.option = option;
  }

  search(term: string) {
    this.term = term;
    this.loading = true;
    if (this.showOptions) this.searchBooks(term);
    else this.searchAuthors(term);
  }

  searchBooks(term: string) {
    this.booksService.search(this.option.toLocaleLowerCase(), term, this.current)
      .subscribe(data => this.setData(data));
  }

  searchAuthors(term: string) {
    this.authorService.search(term, this.current)
      .subscribe(data => this.setData(data));
  }

  setData(data: any) {
    if (data.numFound <= 0) {
      this.notFound = true;
      this.centerBar = true;
      this.searchResult = [];
    }
    else {
      this.centerBar = false;
      this.notFound = false;
      this.numberOfPages = Math.ceil(data.numFound / this.itemsPerPage);
      this.searchResult = data.docs;
    }

    this.loading = false;
    window.scrollTo(0, 0);
  }

  setCurrentPageAndSearch(current: number) {
    this.current = current;
    this.search(this.term);
  }

}
