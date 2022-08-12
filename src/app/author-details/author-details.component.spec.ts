import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AuthorsService } from '../services/authors.service';

import { AuthorDetailsComponent } from './author-details.component';

describe('AuthorDetailsComponent', () => {
  let component: AuthorDetailsComponent;
  let fixture: ComponentFixture<AuthorDetailsComponent>;
  let authorsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorDetailsComponent],
      providers: [
        HttpClient,
        HttpHandler,
        {
          provide: ActivatedRoute,
          useValue:
          {
            snapshot:
            {
              paramMap: { get: (key: string) => { key: 'OL23919A' } }
            }
          }
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AuthorDetailsComponent);
    component = fixture.componentInstance;

    authorsService = fixture.debugElement.injector.get(AuthorsService);
    spyOn(authorsService, 'getAuthor').and.returnValue(of(fakeAuthor));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


const fakeAuthor = { "wikipedia": "http://en.wikipedia.org/wiki/J._K._Rowling", "source_records": ["amazon:8893817055", "amazon:4863895666", "amazon:1526618249", "amazon:8862561512", "amazon:1526618230", "amazon:6073193009", "amazon:0747574286", "amazon:8327158775", "amazon:841810791X", "amazon:2246810663", "amazon:3548285287", "amazon:7020150705", "bwb:9788498382686", "amazon:9123513683", "amazon:1526618354", "amazon:6041160008", "amazon:1526622807", "amazon:5353044592", "amazon:060641519X", "amazon:8327150731", "bwb:9780751579956", "amazon:9750843878", "amazon:9124083836", "amazon:286866086X", "amazon:2075094551", "amazon:3551559201", "amazon:9124087181", "amazon:1804220272", "bwb:9781526624536", "amazon:0606323473", "amazon:8983927623", "amazon:8418174404", "amazon:0747598460", "amazon:8498389119", "amazon:8498388260", "amazon:8532531776", "amazon:886715818X", "amazon:849838267X", "bwb:9788418797125"], "photos": [5543033, -1], "links": [{ "title": "Official Site", "url": "http://www.jkrowling.com/", "type": { "key": "/type/link" } }], "alternate_names": ["Joanne Rowling", "Joanne K. Rowling", "Jo Murray", "J K Rowling", "Kennilworthy Whisp", "JK Rowling", "Robert Galbraith", "Robert Galbraith (J.K. Rowling)", "Robert Galbraith (pseud. J.K. Rowling)", "Robert Galibraith", "Joanne K Rowling", "\u0414\u0436\u043e\u0430\u043d \u0420\u043e\u0443\u043b\u0456\u043d\u0433", "Dzhoan_Rouling", "J. K. ROWLING", "ROWLING", "J.K.Rowling", "J.K. Rowling"], "remote_ids": { "wikidata": "Q34660", "isni": "000000012148628X", "viaf": "116796842" }, "name": "J. K. Rowling", "birth_date": "31 July 1965", "personal_name": "J. K. Rowling", "title": "OBE", "type": { "key": "/type/author" }, "entity_type": "person", "bio": "Joanne \"Jo\" Murray, OBE (n\u00e9e Rowling), better known under the pen name J. K. Rowling, is a British author best known as the creator of the Harry Potter fantasy series, the idea for which was conceived whilst on a train trip from Manchester to London in 1990. The Potter books have gained worldwide attention, won multiple awards, sold more than 400 million copies, and been the basis for a popular series of films.", "key": "/authors/OL23919A", "latest_revision": 71, "revision": 71, "created": { "type": "/type/datetime", "value": "2008-04-01T03:28:50.625462" }, "last_modified": { "type": "/type/datetime", "value": "2022-05-28T15:28:44.981518" } }