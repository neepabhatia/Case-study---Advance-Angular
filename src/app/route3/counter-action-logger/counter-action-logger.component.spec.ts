import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterActionLoggerComponent } from './counter-action-logger.component';

describe('CounterActionLoggerComponent', () => {
  let component: CounterActionLoggerComponent;
  let fixture: ComponentFixture<CounterActionLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterActionLoggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterActionLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
