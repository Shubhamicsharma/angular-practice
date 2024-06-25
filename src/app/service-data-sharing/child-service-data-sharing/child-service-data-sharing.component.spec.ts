import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildServiceDataSharingComponent } from './child-service-data-sharing.component';

describe('ChildServiceDataSharingComponent', () => {
  let component: ChildServiceDataSharingComponent;
  let fixture: ComponentFixture<ChildServiceDataSharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildServiceDataSharingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildServiceDataSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
