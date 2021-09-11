import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentforCardsComponent } from './componentfor-cards.component';

describe('ComponentforCardsComponent', () => {
  let component: ComponentforCardsComponent;
  let fixture: ComponentFixture<ComponentforCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentforCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentforCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
