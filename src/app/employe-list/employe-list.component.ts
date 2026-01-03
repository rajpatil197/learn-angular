import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit{

  public employees:any[] = [];

  constructor(private employeeService:EmployeeService){}

  ngOnInit(): void {
   this.employeeService.getemployee().subscribe(data =>{
    this.employees = data;
     })
  }



}
