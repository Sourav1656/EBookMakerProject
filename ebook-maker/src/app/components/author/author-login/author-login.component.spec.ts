import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorLoginComponent } from './author-login.component';

describe('AuthorLoginComponent', () => {
  let component: AuthorLoginComponent;
  let fixture: ComponentFixture<AuthorLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorLoginComponent]
    });
    fixture = TestBed.createComponent(AuthorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
