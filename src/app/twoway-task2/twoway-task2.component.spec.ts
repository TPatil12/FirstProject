import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowayTask2Component } from './twoway-task2.component';

describe('TwowayTask2Component', () => {
  let component: TwowayTask2Component;
  let fixture: ComponentFixture<TwowayTask2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwowayTask2Component]
    });
    fixture = TestBed.createComponent(TwowayTask2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
