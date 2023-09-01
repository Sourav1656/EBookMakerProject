import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorHeaderComponent } from './author-header.component';

describe('AuthorHeaderComponent', () => {
  let component: AuthorHeaderComponent;
  let fixture: ComponentFixture<AuthorHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthorHeaderComponent]
    });
    fixture = TestBed.createComponent(AuthorHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
