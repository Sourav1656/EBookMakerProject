import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorForgotpasswordComponent } from './author-forgotpassword.component';

describe('AuthorForgotpasswordComponent', () => {
  let component: AuthorForgotpasswordComponent;
  let fixture: ComponentFixture<AuthorForgotpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorForgotpasswordComponent]
    });
    fixture = TestBed.createComponent(AuthorForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
