import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { BookDetailsComponent } from './book-details.component';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookDetailsComponent],
      providers: [
        HttpClientModule,
        HttpClient,
        HttpHandler,
        {
          provide: ActivatedRoute,
          useValue:
          {
            snapshot:
            {
              paramMap: {
                get: (name: string) => {
                  switch (name) {
                    case 'key':
                      return 'OL8005968M';
                    case 'type':
                      return 'books';
                    default:
                      return ''
                  }
                }
              }
            }
          }
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BookDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

const fakeBook = { "publishers": ["Warner-Barham Music, LLC"], "number_of_pages": 46, "subtitle": "Selected Themes from the Motion Picture", "weight": "7.2 ounces", "covers": [505148], "physical_format": "Paperback", "last_modified": { "type": "/type/datetime", "value": "2014-04-06T06:12:12.848189" }, "latest_revision": 6, "key": "/books/OL8005968M", "authors": [{ "key": "/authors/OL2628221A" }], "ocaid": "harrypottersorce00will", "contributions": ["Bill Galliford (Arranger)", "Ethan Neuburg (Arranger)", "Tod Edmondson (Arranger)"], "subjects": ["Musical scores, lyrics & libretti", "Scores & Soundtracks", "Music", "Music/Songbooks", "Songbooks - Popular", "Musical Instruments - Piano"], "isbn_13": ["9780757991301"], "title": "Harry Potter and the Sorcerer's Stone", "identifiers": { "goodreads": ["818929"], "librarything": ["1270212"] }, "created": { "type": "/type/datetime", "value": "2008-04-29T15:03:11.581851" }, "languages": [{ "key": "/languages/eng" }], "isbn_10": ["0757991300"], "publish_date": "November 1, 2001", "type": { "key": "/type/edition" }, "physical_dimensions": "11.8 x 8.8 x 0.1 inches", "revision": 6 }

