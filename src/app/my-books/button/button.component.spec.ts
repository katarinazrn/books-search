import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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

    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;
    const dbgElement: DebugElement = fixture.debugElement;

    expect(element.textContent).not.toContain('Remove from want to read');
    expect(dbgElement.queryAll(By.css('.active'))).toHaveSize(0);
    expect(component.finished).toBeFalse();
    expect(component.reading).toBeFalse();
    expect(component.wantToRead).toBeFalse();

    component.toggleWantToRead();
    expect(component.wantToRead).toBeTrue();
    expect(component.finished).toBeFalse();
    expect(component.reading).toBeFalse();
    fixture.detectChanges();
    expect(element.textContent).toContain('Remove from want to read');
    expect(dbgElement.queryAll(By.css('.active'))).toHaveSize(1);

    const activeButton: HTMLElement = dbgElement.queryAll(By.css('.active'))[0].nativeElement;
    expect(activeButton.textContent).toContain('Remove from want to read');

    component.toggleWantToRead();
    expect(component.finished).toBeFalse();
    expect(component.reading).toBeFalse();
    expect(component.wantToRead).toBeFalse();
    fixture.detectChanges();
    expect(element.textContent).not.toContain('Remove from want to read');
    expect(dbgElement.queryAll(By.css('.active'))).toHaveSize(0);

  });
});
