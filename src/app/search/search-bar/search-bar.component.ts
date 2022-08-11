import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {

  term: string = '';

  @Output() search: EventEmitter<any>;

  constructor() {
    this.search = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  onSearch() {
    this.search.emit(this.term);
  }

}
