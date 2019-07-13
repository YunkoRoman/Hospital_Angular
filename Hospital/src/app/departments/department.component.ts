import { Component, OnInit } from '@angular/core';
import {DepartmentsService} from "../services/departments.service";
import {Response} from "../interfaces/Response";
import {Departmens} from "../interfaces/departmens";
import {ActivatedRoute, Router} from "@angular/router";



@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent  {
  departament:Departmens[] =[];
  
  constructor( public DepartmeentService: DepartmentsService,
  ) {
    this.DepartmeentService.getDepartment().subscribe((data:Response) => {

        this.departament = data.msg
    });
    

  }

  // changeUrl() {
  //
  //   this.router.(['department'], {})
  // }

}






