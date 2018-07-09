import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Footer2Component } from './footer2.component';

describe('Footer2Component', () => {
  let component: Footer2Component;
  let fixture: ComponentFixture<Footer2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Footer2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Footer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
