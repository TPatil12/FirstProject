import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewaybindingAssignment1Component } from './onewaybinding-assignment1.component';

describe('OnewaybindingAssignment1Component', () => {
  let component: OnewaybindingAssignment1Component;
  let fixture: ComponentFixture<OnewaybindingAssignment1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnewaybindingAssignment1Component]
    });
    fixture = TestBed.createComponent(OnewaybindingAssignment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
