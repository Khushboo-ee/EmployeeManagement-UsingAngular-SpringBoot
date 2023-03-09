import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-one-emp-view',
  templateUrl: './one-emp-view.component.html',
  styleUrls: ['./one-emp-view.component.css']
})
export class OneEmpViewComponent implements OnInit {

  constructor(private empservice:EmployeeserviceService, private route:ActivatedRoute) { }

  id:number;
  emp:Employee;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.emp = new Employee();
    this.empservice.getEmployeeInfoById(this.id).subscribe(data=>{
      this.emp = data;
    });
  }

}
