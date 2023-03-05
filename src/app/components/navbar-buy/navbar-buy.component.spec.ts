import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarBuyComponent } from './navbar.component';

describe('NavbarBuyComponent', () => {
  let component: NavbarBuyComponent;
  let fixture: ComponentFixture<NavbarBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarBuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
