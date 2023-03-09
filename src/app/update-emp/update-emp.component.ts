import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
  id:number;
  emp:Employee;

  constructor(private empservice:EmployeeserviceService, private route:ActivatedRoute, 
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.empservice.getEmployeeInfoById(this.id).subscribe(data=>{
      this.emp = data;
    });
  }
  updateemp()
  {
    this.empservice.updateEmpById(this.id, this.emp).subscribe(data=>{
      console.log(data);
      alert("Employee details updated successfully")
      this.router.navigate(['/emps']);
    });
  }

}
