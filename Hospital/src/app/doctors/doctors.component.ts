import {Component, DoCheck, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DoctorsService} from "../services/doctors.service";
import {Response} from "../interfaces/Response";
import {Doctors} from "../interfaces/doctors";

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit, DoCheck {
  departmentId: any ;
  doctors:Doctors[] =[];
  constructor(public DocrorService:DoctorsService,
              private route: ActivatedRoute){

    this.route.params.subscribe(params => {
      console.log(this.departmentId = params.id);
    });
    this.DocrorService.getDoctors(this.departmentId).subscribe((data:Response) => {
      this.doctors= data.msg
    });
  }

  ngOnInit(): void {

  }

  ngDoCheck(): void {

  }
}
