import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { DepartmentComponent } from './departments/department.component';
import { DoctorsComponent } from './doctors/doctors.component';
import {RouterTestingModule} from "@angular/router/testing";
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { OneDoctorComponent } from './one-doctor/one-doctor.component';
import {HttpAuthInterceptor} from "./interceptor/auth.interceptor";

const routes: Routes = [
  {path:'', component: DepartmentComponent},
  {path:'login', component: LoginComponent},
  {path:'department/:id', component:DoctorsComponent},
  {path:'doctor/:id', component: OneDoctorComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    DoctorsComponent,
    LoginComponent,
    SearchDoctorComponent,
    OneDoctorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterTestingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
