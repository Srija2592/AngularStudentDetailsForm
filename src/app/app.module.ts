import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudenttableComponent } from './studenttable/studenttable.component';
import { HomeComponent } from './home/home.component';
import { StudentpersonaldetailsComponent } from './studentpersonaldetails/studentpersonaldetails.component';
import { StudentacademicdetailsComponent } from './studentacademicdetails/studentacademicdetails.component';
//import { StudentdetailsComponent } from './studentdetails/studentdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    StudenttableComponent,
    HomeComponent,
    StudentpersonaldetailsComponent,
    StudentacademicdetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
