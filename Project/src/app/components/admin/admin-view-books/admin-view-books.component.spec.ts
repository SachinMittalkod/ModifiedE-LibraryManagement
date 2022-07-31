import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewBooksComponent } from './admin-view-books.component';

describe('AdminViewBooksComponent', () => {
  let component: AdminViewBooksComponent;
  let fixture: ComponentFixture<AdminViewBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminViewBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminViewBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
