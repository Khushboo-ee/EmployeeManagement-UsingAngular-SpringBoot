import { Injectable } from '@angular/core';
import { Employee } from './employee';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  private ApiUrl = "http://localhost:8080/api/v1/employees";
  constructor(private httpClient:HttpClient) {}
  getAllEmployees(): Observable<Employee[]>{

    return this.httpClient.get<Employee[]>(`${this.ApiUrl}`);
  }

  newEmployee(employee:Employee): Observable<object>{
   return this.httpClient.post(`${this.ApiUrl}`,employee);// this employee object will directly store into employee object of post method of controller(backend)
  }
  getEmployeeInfoById(id:number):Observable<Employee>{

    return this.httpClient.get<Employee>(`${this.ApiUrl}/${id}`);
  }

  deleteEmpById(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.ApiUrl}/${id}`);
  }

  updateEmpById(id:number, emp:Employee):Observable<Object>{
    return this.httpClient.put(`${this.ApiUrl}/${id}`, emp);
  }
}
