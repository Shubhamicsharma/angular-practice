import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchAPIDataComponent } from './fetch-apidata.component';

describe('FetchAPIDataComponent', () => {
  let component: FetchAPIDataComponent;
  let fixture: ComponentFixture<FetchAPIDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FetchAPIDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FetchAPIDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
