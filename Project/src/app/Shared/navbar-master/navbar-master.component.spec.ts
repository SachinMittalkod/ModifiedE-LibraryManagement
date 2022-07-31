import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMasterComponent } from './navbar-master.component';

describe('NavbarMasterComponent', () => {
  let component: NavbarMasterComponent;
  let fixture: ComponentFixture<NavbarMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
