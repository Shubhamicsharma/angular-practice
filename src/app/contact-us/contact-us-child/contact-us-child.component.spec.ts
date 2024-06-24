import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsChildComponent } from './contact-us-child.component';

describe('ContactUsChildComponent', () => {
  let component: ContactUsChildComponent;
  let fixture: ComponentFixture<ContactUsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactUsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
