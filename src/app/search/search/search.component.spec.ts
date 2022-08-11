import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AuthorsService } from 'src/app/services/authors.service';
import { BooksService } from 'src/app/services/books.service';
import { routes } from '../../app-routing.module';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let router: Router;
  let booksService: any;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), HttpClientTestingModule],
      declarations: [SearchComponent],
      providers: [BooksService, AuthorsService, {
        provide: ActivatedRoute,
        useValue:
        {
          snapshot:
          {
            url: ['books']
          }
        }
      }]
    })
      .compileComponents();

    router = TestBed.get(Router);
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router.initialNavigation();


    booksService = fixture.debugElement.injector.get(BooksService);
    let spy = spyOn(booksService, 'search')
      .and.returnValue(of(fakeResults));
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have showOptions set to true when route is /books', fakeAsync(() => {
    expect(component).toBeTruthy();
    component.ngOnInit();
    expect(component.type).toEqual('books');
    expect(component.showOptions).toBeTrue();
  }));

  it('should have searchResults set after calling method search', fakeAsync(() => {
    component.ngOnInit();
    component.search('test');
    expect(component.searchResult.length).toBeGreaterThan(0);
  }));

  it('should have empty searchResult after seting data with empty array', () => {
    component.setData({ numFound: 0, docs: [] });
    expect(component.notFound).toBeTrue();
    expect(component.centerBar).toBeTrue();
    expect(component.loading).toBeFalse();
    expect(component.searchResult.length).toBeLessThan(1);
  })
});


const fakeResults = {
  'docs': [
    {
      "key": "/works/OL21193729W",
      "type": "work",
      "seed": [
        "/books/OL28701768M",
        "/books/OL29429669M",
        "/works/OL21193729W",
        "/authors/OL3889078A"
      ],
      "title": "First Man on the Moon",
      "title_suggest": "First Man on the Moon",
      "has_fulltext": false,
      "edition_count": 2,
      "edition_key": [
        "OL28701768M",
        "OL29429669M"
      ],
      "publish_date": [
        "2020",
        "2019"
      ],
      "publish_year": [
        2020,
        2019
      ],
      "first_publish_year": 2019,
      "number_of_pages_median": 32,
      "isbn": [
        "9781526310651",
        "1526310651",
        "152631066X",
        "9781526310668"
      ],
      "last_modified_i": 1598382046,
      "ebook_count_i": 0,
      "publisher": [
        "Hachette Children's Group"
      ],
      "language": [
        "eng"
      ],
      "author_key": [
        "OL3889078A"
      ],
      "author_name": [
        "Ben Hubbard"
      ],
      "publisher_facet": [
        "Hachette Children's Group"
      ],
      "_version_": 1715084958605770754,
      "author_facet": [
        "OL3889078A Ben Hubbard"
      ]
    },
    {
      "key": "/works/OL24723836W",
      "type": "work",
      "seed": [
        "/books/OL34129904M",
        "/books/OL32821173M",
        "/works/OL24723836W",
        "/authors/OL7903484A",
        "/authors/OL7482051A",
        "/authors/OL7903485A"
      ],
      "title": "Who Was the First Man on the Moon? : Neil Armstrong",
      "title_suggest": "Who Was the First Man on the Moon? : Neil Armstrong",
      "has_fulltext": false,
      "edition_count": 2,
      "edition_key": [
        "OL34129904M",
        "OL32821173M"
      ],
      "publish_date": [
        "Oct 12, 2021",
        "2021"
      ],
      "publish_year": [
        2021
      ],
      "first_publish_year": 2021,
      "number_of_pages_median": 64,
      "isbn": [
        "0593224434",
        "9780593224434",
        "0593224442",
        "9780593224441"
      ],
      "last_modified_i": 1641936166,
      "ebook_count_i": 0,
      "cover_edition_key": "OL32821173M",
      "cover_i": 11453621,
      "publisher": [
        "Penguin Young Readers Group",
        "Penguin Workshop"
      ],
      "language": [
        "eng"
      ],
      "author_key": [
        "OL7903484A",
        "OL7482051A",
        "OL7903485A"
      ],
      "author_name": [
        "Nathan Page",
        "Who HQ",
        "Drew Shannon"
      ],
      "publisher_facet": [
        "Penguin Workshop",
        "Penguin Young Readers Group"
      ],
      "_version_": 1721694858626727936,
      "author_facet": [
        "OL7482051A Who HQ",
        "OL7903484A Nathan Page",
        "OL7903485A Drew Shannon"
      ]
    },
    {
      "key": "/works/OL25782357W",
      "type": "work",
      "seed": [
        "/books/OL34733459M",
        "/works/OL25782357W",
        "/authors/OL6416970A",
        "/authors/OL9751068A"
      ],
      "title": "First Man on the Moon",
      "title_suggest": "First Man on the Moon",
      "has_fulltext": false,
      "edition_count": 1,
      "edition_key": [
        "OL34733459M"
      ],
      "publish_date": [
        "2019"
      ],
      "publish_year": [
        2019
      ],
      "first_publish_year": 2019,
      "isbn": [
        "184234935X",
        "9781842349359"
      ],
      "last_modified_i": 1633616625,
      "ebook_count_i": 0,
      "publisher": [
        "Cherrytree Books"
      ],
      "language": [
        "eng"
      ],
      "author_key": [
        "OL6416970A",
        "OL9751068A"
      ],
      "author_name": [
        "John Malam",
        "Hilary Malam"
      ],
      "publisher_facet": [
        "Cherrytree Books"
      ],
      "_version_": 1715089537689976836,
      "author_facet": [
        "OL6416970A John Malam",
        "OL9751068A Hilary Malam"
      ]
    },
    {
      "key": "/works/OL28115343W",
      "type": "work",
      "seed": [
        "/books/OL38482417M",
        "/works/OL28115343W",
        "/authors/OL10482995A"
      ],
      "title": "First Naked Man on the Moon",
      "title_suggest": "First Naked Man on the Moon",
      "edition_count": 1,
      "edition_key": [
        "OL38482417M"
      ],
      "publish_date": [
        "2022"
      ],
      "publish_year": [
        2022
      ],
      "first_publish_year": 2022,
      "isbn": [
        "9798412542447"
      ],
      "last_modified_i": 1655638709,
      "ebook_count_i": 0,
      "has_fulltext": false,
      "public_scan_b": false,
      "publisher": [
        "Independently Published"
      ],
      "language": [
        "eng"
      ],
      "author_key": [
        "OL10482995A"
      ],
      "author_name": [
        "Muse et Muse et Libert\u00e9"
      ],
      "publisher_facet": [
        "Independently Published"
      ],
      "_version_": 1736063020450185216,
      "author_facet": [
        "OL10482995A Muse et Muse et Libert\u00e9"
      ]
    },
    {
      "key": "/works/OL456879W",
      "type": "work",
      "seed": [
        "/books/OL8926222M",
        "/works/OL456879W",
        "/subjects/space_flight_to_the_moon",
        "/subjects/juvenile_literature",
        "/authors/OL26765A"
      ],
      "title": "First Man on the Moon (Dates with History)",
      "title_suggest": "First Man on the Moon (Dates with History)",
      "has_fulltext": true,
      "edition_count": 1,
      "edition_key": [
        "OL8926222M"
      ],
      "publish_date": [
        "June 27, 2003"
      ],
      "publish_year": [
        2003
      ],
      "first_publish_year": 2003,
      "number_of_pages_median": 32,
      "isbn": [
        "1842342010",
        "9781842342015"
      ],
      "last_modified_i": 1627785004,
      "ebook_count_i": 1,
      "ia": [
        "firstmanonmoon210000mala"
      ],
      "public_scan_b": false,
      "ia_collection_s": "internetarchivebooks;printdisabled;inlibrary",
      "lending_edition_s": "OL8926222M",
      "lending_identifier_s": "firstmanonmoon210000mala",
      "printdisabled_s": "OL8926222M",
      "cover_edition_key": "OL8926222M",
      "cover_i": 2021165,
      "publisher": [
        "Cherrytree Books"
      ],
      "author_key": [
        "OL26765A"
      ],
      "author_name": [
        "John Malam"
      ],
      "subject": [
        "Space flight to the moon",
        "Juvenile literature",
        "Accessible book",
        "Protected DAISY"
      ],
      "id_goodreads": [
        "778984"
      ],
      "ia_box_id": [
        "IA1972122"
      ],
      "publisher_facet": [
        "Cherrytree Books"
      ],
      "subject_facet": [
        "Accessible book",
        "Juvenile literature",
        "Protected DAISY",
        "Space flight to the moon"
      ],
      "_version_": 1715092392245198850,
      "author_facet": [
        "OL26765A John Malam"
      ],
      "subject_key": [
        "accessible_book",
        "juvenile_literature",
        "protected_daisy",
        "space_flight_to_the_moon"
      ]
    },
    {
      "key": "/works/OL25040568W",
      "type": "work",
      "seed": [
        "/books/OL33295848M",
        "/works/OL25040568W",
        "/authors/OL7552118A"
      ],
      "title": "First Man On The Moon 50 Years 1969 - 2019",
      "title_suggest": "First Man On The Moon 50 Years 1969 - 2019",
      "has_fulltext": false,
      "edition_count": 1,
      "edition_key": [
        "OL33295848M"
      ],
      "publish_date": [
        "Jun 28, 2019"
      ],
      "publish_year": [
        2019
      ],
      "first_publish_year": 2019,
      "number_of_pages_median": 110,
      "isbn": [
        "1076818501",
        "9781076818508"
      ],
      "last_modified_i": 1631511916,
      "ebook_count_i": 0,
      "cover_edition_key": "OL33295848M",
      "cover_i": 11948621,
      "publisher": [
        "Independently published",
        "Independently Published"
      ],
      "author_key": [
        "OL7552118A"
      ],
      "author_name": [
        "Shayley Stationery Books"
      ],
      "publisher_facet": [
        "Independently Published",
        "Independently published"
      ],
      "_version_": 1715088772749590528,
      "author_facet": [
        "OL7552118A Shayley Stationery Books"
      ]
    }
  ]
}