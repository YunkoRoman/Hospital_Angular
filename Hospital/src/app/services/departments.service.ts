import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Departmens} from "../interfaces/departmens";



@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(
    public http:HttpClient
  ) { }
  getDepartment(){
    return this.http.get('http://localhost:3000/')
  }
}
