import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewEbookComponent } from './admin-view-ebook.component';

describe('AdminViewEbookComponent', () => {
  let component: AdminViewEbookComponent;
  let fixture: ComponentFixture<AdminViewEbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminViewEbookComponent]
    });
    fixture = TestBed.createComponent(AdminViewEbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
