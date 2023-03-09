import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { OneEmpViewComponent } from './one-emp-view/one-emp-view.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { ViewAllEmpComponent } from './view-all-emp/view-all-emp.component';

const routes: Routes = [
  {path:'',component:ViewAllEmpComponent},
  {path:'newemp',component:CreateEmpComponent},
  {path:'oneemp/:id',component:OneEmpViewComponent},
  //here id is variable present in the url this variable will get its value from a function created in viewallempcomponent.ts file
  {path:'updateemp/:id',component:UpdateEmpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
