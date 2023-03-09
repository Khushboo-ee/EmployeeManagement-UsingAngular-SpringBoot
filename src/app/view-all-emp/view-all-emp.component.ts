import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-view-all-emp',
  templateUrl: './view-all-emp.component.html',
  styleUrls: ['./view-all-emp.component.css']
})
export class ViewAllEmpComponent implements OnInit {

  empinfo:Employee[];
  constructor(private empservice:EmployeeserviceService, private router:Router) { }

  ngOnInit(): void {
    this.showAllEmployees();
  }
  showAllEmployees(){
    this.empservice.getAllEmployees().subscribe(data=>{
      this.empinfo=data;
    });
  }
  getOneEmpDetails(id:number){
    this.router.navigate(['/oneemp', id]);//this id variable will pass on routerlink defined in app-routing.module.ts
  }
  deleteEmployeeDetails(id:number)
  {
    this.empservice.deleteEmpById(id).subscribe(data=>{
      console.log(data);
      this.showAllEmployees();
    });
  }
  updateEmpDetails(id:number)
  {
    this.router.navigate(['/updateemp', id]);
  }

}
