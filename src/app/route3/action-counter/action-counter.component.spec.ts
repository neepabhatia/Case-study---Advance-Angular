import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCounterComponent } from './action-counter.component';

describe('ActionCounterComponent', () => {
  let component: ActionCounterComponent;
  let fixture: ComponentFixture<ActionCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
