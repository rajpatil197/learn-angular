import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeListComponent } from './employe-list/employe-list.component';
import { EmployeDetailsComponent } from './employe-details/employe-details.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:"employee-list",component:EmployeListComponent},
  {path:"employees/:id",component:EmployeDetailsComponent},
  {path:"test",component:TestComponent},
  {path:"**",component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
