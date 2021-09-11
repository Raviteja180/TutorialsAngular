import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingDemo2Component } from './routing-demo2.component';

describe('RoutingDemo2Component', () => {
  let component: RoutingDemo2Component;
  let fixture: ComponentFixture<RoutingDemo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingDemo2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
