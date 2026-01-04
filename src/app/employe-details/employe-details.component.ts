import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-employe-details',
  templateUrl: './employe-details.component.html',
  styleUrls: ['./employe-details.component.css']
})
export class EmployeDetailsComponent implements OnInit {

  public employees:any;
  public allemployees:any[] = [];

  empid!:number;

  constructor(private employeeService:EmployeeService,private route:ActivatedRoute , private router:Router){}

  ngOnInit(): void {
  //  this.empid = Number(this.route.snapshot.paramMap.get('id'));

  //  this.employeeService.getemployeeById(this.empid).subscribe(data =>{
  //   this.employees = data;
  //  })

  // this method to get id form url is best because continusely updated
     this.route.paramMap.subscribe((params: ParamMap)=>{ 
    let id = parseInt(params.get('id')!,10);
    this.empid = id; 
     
   this.employeeService.getemployeeById(this.empid).subscribe(data =>{
    this.employees = data;
   })
   })

  //  this.employeeService.getemployee().subscribe(data =>{
  //   this.allemployees = data; // get all employees details 
  //  })

  }

  goprevious(){
    let previousId = this.empid - 1;
    this.router.navigate(['/employees',previousId]);
  }
  gonext(){
    let nextId = this.empid + 1;
    this.router.navigate(['/employees',nextId]);
  }

  gotolist(){
    let selectedId = this.empid ? this.empid : null;
    this.router.navigate(['/employee-list',{id:selectedId}]);
  }

}
