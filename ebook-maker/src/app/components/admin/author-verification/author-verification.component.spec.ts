import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorVerificationComponent } from './author-verification.component';

describe('AuthorVerificationComponent', () => {
  let component: AuthorVerificationComponent;
  let fixture: ComponentFixture<AuthorVerificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorVerificationComponent]
    });
    fixture = TestBed.createComponent(AuthorVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
