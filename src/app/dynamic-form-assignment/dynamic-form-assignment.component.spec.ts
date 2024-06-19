import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormAssignmentComponent } from './dynamic-form-assignment.component';

describe('DynamicFormAssignmentComponent', () => {
  let component: DynamicFormAssignmentComponent;
  let fixture: ComponentFixture<DynamicFormAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicFormAssignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DynamicFormAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
