import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudenttableComponent } from './studenttable/studenttable.component';
import { StudentpersonaldetailsComponent } from './studentpersonaldetails/studentpersonaldetails.component';
import { StudentacademicdetailsComponent } from './studentacademicdetails/studentacademicdetails.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'studenttable',component:StudenttableComponent},
  {path:'studentpersonaldetails',component:StudentpersonaldetailsComponent},
  {path:'studentacademicdetails',component:StudentacademicdetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
