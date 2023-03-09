import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentacademicdetailsComponent } from './studentacademicdetails.component';

describe('StudentacademicdetailsComponent', () => {
  let component: StudentacademicdetailsComponent;
  let fixture: ComponentFixture<StudentacademicdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentacademicdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentacademicdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
