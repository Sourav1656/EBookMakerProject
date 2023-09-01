import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEbookComponent } from './view-ebook.component';

describe('ViewEbookComponent', () => {
  let component: ViewEbookComponent;
  let fixture: ComponentFixture<ViewEbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewEbookComponent]
    });
    fixture = TestBed.createComponent(ViewEbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
