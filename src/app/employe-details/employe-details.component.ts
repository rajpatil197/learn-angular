import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employe-details',
  templateUrl: './employe-details.component.html',
  styleUrls: ['./employe-details.component.css']
})
export class EmployeDetailsComponent implements OnInit {

  public employees:any;
  public allemployees:any[] = [];

  empid!:number;

  constructor(private employeeService:EmployeeService,private route:ActivatedRoute){}

  ngOnInit(): void {
   this.empid = Number(this.route.snapshot.paramMap.get('id'));

   this.employeeService.getemployeeById(this.empid).subscribe(data =>{
    this.employees = data;
   })

  //  this.employeeService.getemployee().subscribe(data =>{
  //   this.allemployees = data; // get all employees details 
  //  })

  }



}
