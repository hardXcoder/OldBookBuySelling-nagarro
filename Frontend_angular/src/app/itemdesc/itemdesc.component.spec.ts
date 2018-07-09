import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemdescComponent } from './itemdesc.component';

describe('ItemdescComponent', () => {
  let component: ItemdescComponent;
  let fixture: ComponentFixture<ItemdescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemdescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
