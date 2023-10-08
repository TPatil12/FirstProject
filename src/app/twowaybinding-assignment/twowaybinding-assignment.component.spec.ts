import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaybindingAssignmentComponent } from './twowaybinding-assignment.component';

describe('TwowaybindingAssignmentComponent', () => {
  let component: TwowaybindingAssignmentComponent;
  let fixture: ComponentFixture<TwowaybindingAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwowaybindingAssignmentComponent]
    });
    fixture = TestBed.createComponent(TwowaybindingAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
