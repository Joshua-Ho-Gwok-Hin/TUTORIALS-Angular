import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingWindowComponent } from './shopping-window.component';

describe('ShoppingWindowComponent', () => {
  let component: ShoppingWindowComponent;
  let fixture: ComponentFixture<ShoppingWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingWindowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
