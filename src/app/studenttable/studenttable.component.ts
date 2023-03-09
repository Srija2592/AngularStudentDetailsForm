import { Component } from '@angular/core';
import { Student } from '../Student';
import { Studentlist } from '../Studentlist';

@Component({
  selector: 'app-studenttable',
  templateUrl: './studenttable.component.html',
  styleUrls: ['./studenttable.component.css']
})
export class StudenttableComponent {
   Students:Student[]=Studentlist;
   SelectedStudent:Student=new Student();
   viewstudent:boolean=false;



  getstudentdata(student:Student):any{
    this.viewstudent=true;
    this.SelectedStudent=student;
  }

}
