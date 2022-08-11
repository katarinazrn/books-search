import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BooksService } from 'src/app/services/books.service';
import { MyBooksService } from 'src/app/services/my-books.service';

import { MyBooksComponent } from './my-books.component';

describe('MyBooksComponent', () => {
  let component: MyBooksComponent;
  let fixture: ComponentFixture<MyBooksComponent>;
  let myBooksService;
  let booksService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyBooksComponent],
      providers: [HttpClientTestingModule, HttpClient, HttpHandler, MyBooksService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MyBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    myBooksService = fixture.debugElement.injector.get(MyBooksService);
    spyOn(myBooksService, 'getWantToReadBooks')
      .and.returnValue(of([]));
    spyOn(myBooksService, 'getReadingBooks')
      .and.returnValue(of([]));
    spyOn(myBooksService, 'getFinishedBooks')
      .and.returnValue(of(["/works/OL8005968M"]));

    booksService = fixture.debugElement.injector.get(BooksService);
    spyOn(booksService, 'getBook').and.returnValue(of(fakeBook));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize wantToRead, reading and finished lists', () => {
    component.ngOnInit();

    expect(component.wantToRead).toHaveSize(0);
    expect(component.reading).toHaveSize(0);
    expect(component.finished).toEqual([fakeBook]);
  })

  it('should remove book from finished list', () => {
    component.ngOnInit();

    component.removeFromFinished("/books/OL8005968M");
    expect(component.finished).toHaveSize(0);
  });

  it('should move book from finished list to reading list', () => {
    component.ngOnInit();

    component.addToReading("/books/OL8005968M");
    expect(component.finished).toHaveSize(0);
    expect(component.reading).toEqual([fakeBook]);
  })

});

const fakeBook = { "publishers": ["Warner-Barham Music, LLC"], "number_of_pages": 46, "subtitle": "Selected Themes from the Motion Picture", "weight": "7.2 ounces", "covers": [505148], "physical_format": "Paperback", "last_modified": { "type": "/type/datetime", "value": "2014-04-06T06:12:12.848189" }, "latest_revision": 6, "key": "/books/OL8005968M", "authors": [{ "key": "/authors/OL2628221A" }], "ocaid": "harrypottersorce00will", "contributions": ["Bill Galliford (Arranger)", "Ethan Neuburg (Arranger)", "Tod Edmondson (Arranger)"], "subjects": ["Musical scores, lyrics & libretti", "Scores & Soundtracks", "Music", "Music/Songbooks", "Songbooks - Popular", "Musical Instruments - Piano"], "isbn_13": ["9780757991301"], "title": "Harry Potter and the Sorcerer's Stone", "identifiers": { "goodreads": ["818929"], "librarything": ["1270212"] }, "created": { "type": "/type/datetime", "value": "2008-04-29T15:03:11.581851" }, "languages": [{ "key": "/languages/eng" }], "isbn_10": ["0757991300"], "publish_date": "November 1, 2001", "type": { "key": "/type/edition" }, "physical_dimensions": "11.8 x 8.8 x 0.1 inches", "revision": 6 }

