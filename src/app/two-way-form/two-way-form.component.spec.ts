import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayFormComponent } from './two-way-form.component';

describe('TwoWayFormComponent', () => {
  let component: TwoWayFormComponent;
  let fixture: ComponentFixture<TwoWayFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoWayFormComponent]
    });
    fixture = TestBed.createComponent(TwoWayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
