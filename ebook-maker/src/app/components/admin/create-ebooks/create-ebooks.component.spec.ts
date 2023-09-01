import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEbooksComponent } from './create-ebooks.component';

describe('CreateEbooksComponent', () => {
  let component: CreateEbooksComponent;
  let fixture: ComponentFixture<CreateEbooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEbooksComponent]
    });
    fixture = TestBed.createComponent(CreateEbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
