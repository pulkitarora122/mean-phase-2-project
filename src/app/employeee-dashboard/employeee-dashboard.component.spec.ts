import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeeDashboardComponent } from './employeee-dashboard.component';

describe('EmployeeeDashboardComponent', () => {
  let component: EmployeeeDashboardComponent;
  let fixture: ComponentFixture<EmployeeeDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeeDashboardComponent]
    });
    fixture = TestBed.createComponent(EmployeeeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
