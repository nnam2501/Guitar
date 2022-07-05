import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemWhyComponent } from './item-why.component';

describe('ItemWhyComponent', () => {
  let component: ItemWhyComponent;
  let fixture: ComponentFixture<ItemWhyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemWhyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemWhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
