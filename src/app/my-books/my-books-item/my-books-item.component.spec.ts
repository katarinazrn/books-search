import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBooksItemComponent } from './my-books-item.component';

describe('MyBooksItemComponent', () => {
  let component: MyBooksItemComponent;
  let fixture: ComponentFixture<MyBooksItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyBooksItemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MyBooksItemComponent);
    component = fixture.componentInstance;

    component.book = fakeBook;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display book title', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('The Invisible Man');
  })

  it('should have cover ', () => {
    component.ngOnInit();
    expect(component.cover).not.toEqual('');
  })
});

const fakeBook = { "description": "This book is the story of Griffin, a scientist who creates a serum to render himself invisible, and his descent into madness that follows.", "covers": [6419199, 8237014, 368526, 2324378, 911204, 278563, 1260699, 1964114, 1288569, 11876542, 6160924, 2972211, 6930045, 8443536, 8460593, 8586633, 8597931, 8665880, 8665881, 8782856, 8783092, 8890102, 9071724, 9195165, 10187589, 10767011, 8785301, 8915576, 9177146, 10079814, 10105791, 10455175, 11194264, 5268879, 11515689, 11652598, 12029238, 8571040, 11475787, 10508513, 12106436, 10562269, 8757822, 11312159, 8423448, 10630463, 406825, 11642139, 2132527, 8389242, 10849644, 10850558, 12119680, 8775825, 11514004, 10690885], "key": "/works/OL52266W", "authors": [{ "author": { "key": "/authors/OL13066A" }, "type": { "key": "/type/author_role" } }], "title": "The Invisible Man", "subjects": ["Ciencia-ficci\u00f3n", "Classic Literature", "Fiction", "Mentally ill", "Science Fiction & Fantasy", "Science fiction", "Scientists", "English Science fiction", "Experiments", "Adaptations", "Time travel", "Large type books", "British and irish fiction (fictional works by one author)", "England, fiction", "Scientists, fiction", "Children's fiction", "Mystery and detective stories", "Literature and fiction, science fiction", "Fiction, psychological", "Fiction, science fiction, general", "English literature", "English fiction, history and criticism, 20th century", "Wells, h. g. (herbert george), 1866-1946", "FICTION / Classics", "FICTION / Science Fiction / General", "FICTION / Horror", "Juvenile fiction", "Science", "Roman pour la jeunesse", "Comic and Graphic Books", "Cartoons and comics", "Comic books, strips", "Animal experimentation", "Dictionaries", "English language", "French", "Korean", "German", "Fiction, general", "Fiction, historical, general", "Elementary education of adults", "Reading, remedial teaching", "Spanish language", "Readers", "Spanish language materials"], "type": { "key": "/type/work" }, "subject_times": ["19th century"], "first_publish_date": "1897", "subject_people": ["H. G. Wells (1866-1946)"], "latest_revision": 60, "revision": 60, "created": { "type": "/type/datetime", "value": "2009-10-15T16:30:47.596577" }, "last_modified": { "type": "/type/datetime", "value": "2022-04-08T14:56:08.388886" } }
