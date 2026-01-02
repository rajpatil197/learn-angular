import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  constructor() { }

  getemployee(){
    return [
  {"id": 1,"name": "John Doe","age": 28,"department": "Sales" },
  {"id": 2, "name": "Sarah Smith","age": 34,"department": "HR"},
  {"id": 3, "name": "Michael Johnson", "age": 30,"department": "IT"}
  ];

  }
}
