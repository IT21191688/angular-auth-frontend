import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorVerificationComponent } from './doctor-verification.component';

describe('DoctorVerificationComponent', () => {
  let component: DoctorVerificationComponent;
  let fixture: ComponentFixture<DoctorVerificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorVerificationComponent]
    });
    fixture = TestBed.createComponent(DoctorVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
