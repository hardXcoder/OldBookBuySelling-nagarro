import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetmessageComponent } from './getmessage.component';

describe('GetmessageComponent', () => {
  let component: GetmessageComponent;
  let fixture: ComponentFixture<GetmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
