import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ViewAllEmpComponent } from './view-all-emp/view-all-emp.component';
import { OneEmpViewComponent } from './one-emp-view/one-emp-view.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmpComponent,
    ViewAllEmpComponent,
    OneEmpViewComponent,
    UpdateEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
