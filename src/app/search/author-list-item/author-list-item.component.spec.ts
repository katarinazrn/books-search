import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorListItemComponent } from './author-list-item.component';

describe('AuthorListItemComponent', () => {
  let component: AuthorListItemComponent;
  let fixture: ComponentFixture<AuthorListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorListItemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AuthorListItemComponent);
    component = fixture.componentInstance;

    component.author = fakeAuthor;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


const fakeAuthor = { "numFound": 11, "start": 0, "numFoundExact": true, "docs": [{ "key": "OL23919A", "type": "author", "name": "J. K. Rowling", "alternate_names": ["Joanne Rowling", "Joanne K. Rowling", "Jo Murray", "J K Rowling", "Kennilworthy Whisp", "JK Rowling", "Robert Galbraith", "Robert Galbraith (J.K. Rowling)", "Robert Galbraith (pseud. J.K. Rowling)", "Robert Galibraith", "Joanne K Rowling", "\u0414\u0436\u043e\u0430\u043d \u0420\u043e\u0443\u043b\u0456\u043d\u0433", "Dzhoan_Rouling", "J. K. ROWLING", "ROWLING", "J.K.Rowling", "J.K. Rowling"], "birth_date": "31 July 1965", "top_work": "Harry Potter and the Philosopher's Stone", "work_count": 330, "top_subjects": ["Accessible book", "Protected DAISY", "Fiction", "Fantasy fiction", "Children's fiction", "New York Times bestseller", "Harry Potter", "England, fiction", "Wizards, fiction", "Wizards"], "_version_": 1736289515757109267 }, { "key": "OL10140190A", "type": "author", "name": "Order Phoenix By J. K. Rowling", "top_work": "Harry Potter House Slytherin Edition Series 11-15", "work_count": 1, "_version_": 1735682289820499972 }, { "key": "OL10140188A", "type": "author", "name": "Goblet Fire By J. K. Rowling", "top_work": "Harry Potter House Slytherin Edition Series 11-15", "work_count": 1, "_version_": 1735682289957863429 }, { "key": "OL10140186A", "type": "author", "name": "Prisoner of Azkaban By J. K. Rowling", "top_work": "Harry Potter House Slytherin Edition Series 11-15", "work_count": 1, "_version_": 1735682289957863430 }, { "key": "OL10140184A", "type": "author", "name": "Harry Potter and the Philosopher's Stone By J. K. Rowling", "top_work": "Harry Potter House Slytherin Edition Series 11-15", "work_count": 1, "_version_": 1735682289995612170 }, { "key": "OL10140192A", "type": "author", "name": "Chamber of Secrets By J. K. Rowling", "top_work": "Harry Potter House Slytherin Edition Series 11-15", "work_count": 1, "_version_": 1735682290008195075 }, { "key": "OL10364687A", "type": "author", "name": "J K Rowling", "top_work": "Harry Potter and the Deathly Hallows", "work_count": 1, "_version_": 1735683331733848070 }, { "key": "OL10140196A", "type": "author", "name": "Prisoner of Azkaban By J. K. Rowling", "work_count": 0, "_version_": 1735682289799528454 }, { "key": "OL10140194A", "type": "author", "name": "Harry Potter and the Philosopher's Stone By J. K. Rowling", "work_count": 0, "_version_": 1735682290016583688 }, { "key": "OL10433618A", "type": "author", "name": "J. K. Rowling", "work_count": 0, "_version_": 1735745430591897600 }, { "key": "OL10602967A", "type": "author", "name": "J K Rowling; Hye-Won Kim", "work_count": 0, "_version_": 1740768743265402880 }] }