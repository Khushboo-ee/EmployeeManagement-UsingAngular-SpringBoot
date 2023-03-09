import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.css']
})
export class CreateEmpComponent implements OnInit {

  emp: Employee = new Employee();
  
  constructor(private empservice:EmployeeserviceService) { }

  ngOnInit(): void {
  }
  //you have to call newEmployee() method from employeeservice
  saveEmployee(){
//subscribe method will store data returned from backend post method of employee object type into data variable
    this.empservice.newEmployee(this.emp).subscribe(data=>{
      console.log(data);
      alert("Employee details added.");
    })
  }

}
