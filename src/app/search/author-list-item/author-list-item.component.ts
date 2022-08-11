import { Component, Input, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/services/authors.service';

@Component({
  selector: 'app-author-list-item',
  templateUrl: './author-list-item.component.html',
  styleUrls: ['./author-list-item.component.css']
})
export class AuthorListItemComponent implements OnInit {

  @Input() author: any;
  picture: string = '';

  constructor() { }

  ngOnInit(): void {
  }


}
