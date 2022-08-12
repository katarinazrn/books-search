import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsComponent } from './options.component';

describe('OptionsComponent', () => {
  let component: OptionsComponent;
  let fixture: ComponentFixture<OptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OptionsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should have selectedOption initialized to a value 'Title'", () => {
    const optionsComponent = new OptionsComponent();
    expect(optionsComponent.selectedOption).toEqual('Title');
  });

  it("should show options when setOption set to true", () => {
    component.setOption = true;
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('Publisher');
  })

});
