import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookVerificationComponent } from './book-verification.component';

describe('BookVerificationComponent', () => {
  let component: BookVerificationComponent;
  let fixture: ComponentFixture<BookVerificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookVerificationComponent]
    });
    fixture = TestBed.createComponent(BookVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
