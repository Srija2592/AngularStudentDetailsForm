import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentpersonaldetailsComponent } from './studentpersonaldetails.component';

describe('StudentpersonaldetailsComponent', () => {
  let component: StudentpersonaldetailsComponent;
  let fixture: ComponentFixture<StudentpersonaldetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentpersonaldetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentpersonaldetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
