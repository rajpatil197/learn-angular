import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { EmployeDetailsComponent } from './employe-details/employe-details.component';
import { EmployeeService } from './employee.service';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeListComponent,
    EmployeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
