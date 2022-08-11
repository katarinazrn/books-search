import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have toggle wantToRead ', () => {
    component.key = '/works/OL25040568W';
    expect(component.finished).toBeFalse();
    expect(component.reading).toBeFalse();
    expect(component.wantToRead).toBeFalse();

    component.toggleWantToRead();
    expect(component.wantToRead).toBeTrue();
    expect(component.finished).toBeFalse();
    expect(component.reading).toBeFalse();

    component.toggleWantToRead();
    expect(component.finished).toBeFalse();
    expect(component.reading).toBeFalse();
    expect(component.wantToRead).toBeFalse();

  });
});
