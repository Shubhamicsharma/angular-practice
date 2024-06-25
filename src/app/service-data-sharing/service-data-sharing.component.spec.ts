import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDataSharingComponent } from './service-data-sharing.component';

describe('ServiceDataSharingComponent', () => {
  let component: ServiceDataSharingComponent;
  let fixture: ComponentFixture<ServiceDataSharingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceDataSharingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceDataSharingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
