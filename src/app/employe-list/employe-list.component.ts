import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit{

  public employees:any[] = [];

  selectedId:any;

  constructor(private employeeService:EmployeeService,private router:Router ,private route:ActivatedRoute){}

  ngOnInit(): void {
   this.employeeService.getemployee().subscribe(data =>{
    this.employees = data;
     })

     this.route.paramMap.subscribe((params :ParamMap)=>{
      let id = parseInt(params.get('id')!,10);
      this.selectedId = id;
     })
  }

  onselect(id:number){
    this.router.navigate(['/employees',id]);
  }

  isSelected(id:number):boolean{
    return id === this.selectedId;
  }

}
