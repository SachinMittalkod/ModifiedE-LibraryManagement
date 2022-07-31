import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofadminbooksComponent } from './listofadminbooks.component';

describe('ListofadminbooksComponent', () => {
  let component: ListofadminbooksComponent;
  let fixture: ComponentFixture<ListofadminbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofadminbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofadminbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
