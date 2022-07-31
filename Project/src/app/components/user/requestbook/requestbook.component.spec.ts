import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestbookComponent } from './requestbook.component';

describe('RequestbookComponent', () => {
  let component: RequestbookComponent;
  let fixture: ComponentFixture<RequestbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
