import { Component } from '@angular/core';
import { Student } from '../Student';
import { Studentlist } from '../Studentlist';

@Component({
  selector: 'app-studentacademicdetails',
  templateUrl: './studentacademicdetails.component.html',
  styleUrls: ['./studentacademicdetails.component.css']
})
export class StudentacademicdetailsComponent {
  students:Student[]=Studentlist;
  student:Student=new Student();
  viewstudent:boolean=false;
  totalmarks:any=0;
  mark:any={};



  getstudentacademicdetails(student:Student){
    this.viewstudent=true;
    this.student=student;
    this.mark=student.marks;
    this.totalmarks=this.mark.telugu+this.mark.hindi+this.mark.english+this.mark.maths+this.mark.science+this.mark.social;
  }



}

