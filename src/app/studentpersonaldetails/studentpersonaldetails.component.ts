import { Component } from '@angular/core';
import { Student } from '../Student';
import { Studentlist } from '../Studentlist';

@Component({
  selector: 'app-studentpersonaldetails',
  templateUrl: './studentpersonaldetails.component.html',
  styleUrls: ['./studentpersonaldetails.component.css']
})
export class StudentpersonaldetailsComponent {
  Students:Student[]=Studentlist;
  student:Student=new Student();
  viewstudent:boolean=false;

  getstudentpersonaldata(student:Student):any{
    this.viewstudent=true;
    this.student=student;
  }


}
