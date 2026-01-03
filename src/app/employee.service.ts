import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private api_url:string="https://jsonplaceholder.typicode.com/users";
  
constructor(private http: HttpClient) {}


  getemployee():Observable<any[]>{
   return this.http.get<any[]>(this.api_url);
  }
}
