import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-result-list',
  templateUrl: './search-result-list.component.html',
  styleUrls: ['./search-result-list.component.css']
})
export class SearchResultListComponent implements OnInit {

  @Input() list: any = [];
  @Input() type: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
