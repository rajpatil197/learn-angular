import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit{

  public employees:any[] = [];

  constructor(private employeeService:EmployeeService,private router:Router){}

  ngOnInit(): void {
   this.employeeService.getemployee().subscribe(data =>{
    this.employees = data;
     })
  }

  onselect(id:number){
    this.router.navigate(['/employees',id]);
  }



}
