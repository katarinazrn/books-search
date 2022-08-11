import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorsService } from '../services/authors.service';

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  author: any = {};
  picture: string = '';

  constructor(private route: ActivatedRoute, private authorService: AuthorsService) { }

  ngOnInit(): void {
    const key: any = this.route.snapshot.paramMap.get('key');
    this.authorService.getAuthor(`/authors/${key}`).subscribe(author => {
      this.author = author;
      this.setPicture();
    });
  }

  setPicture() {
    if (this.author.photos)
      this.picture = `https://covers.openlibrary.org/a/id/${this.author.photos[0]}-M.jpg`;
    else this.picture = './assets/person.png';
  }
}
