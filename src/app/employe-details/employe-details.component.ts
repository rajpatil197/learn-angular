import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employe-details',
  templateUrl: './employe-details.component.html',
  styleUrls: ['./employe-details.component.css']
})
export class EmployeDetailsComponent implements OnInit {

  public employees:any[] = [];

  constructor(private employeeService:EmployeeService){}

  ngOnInit(): void {
   
    this.employees = this.employeeService.getemployee();
  }

}
