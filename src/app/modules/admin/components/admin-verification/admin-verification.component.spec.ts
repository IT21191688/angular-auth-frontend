import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVerificationComponent } from './admin-verification.component';

describe('AdminVerificationComponent', () => {
  let component: AdminVerificationComponent;
  let fixture: ComponentFixture<AdminVerificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminVerificationComponent]
    });
    fixture = TestBed.createComponent(AdminVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
