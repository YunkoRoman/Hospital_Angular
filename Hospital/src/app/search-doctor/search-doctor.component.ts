import { Component, OnInit, DoCheck } from '@angular/core';
import {SearchDoctorService} from "../services/search-doctor.service";
import {Response} from "../interfaces/Response";
import{Doctors} from "../interfaces/doctors";
import {DoctorsService} from "../services/doctors.service";
import {ActivatedRoute} from "@angular/router";
import {OneDoctorService} from "../services/one-doctor.service";

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.css']
})
export class SearchDoctorComponent{


  doctors: Doctors[] = [];
  doctor_id: number;

  constructor(public SearchByName: SearchDoctorService,
              public DocrorService:DoctorsService,
              public OneDoctorService:OneDoctorService,
              private route: ActivatedRoute) {
  }

  findPeople($event) {
    console.log($event.target.value);
    if (!$event.target.value) {this.doctors  = []}
    else{ this.SearchByName.getDoctors($event.target.value).subscribe((data:Response)=>{
      console.log(this.doctors = data.msg);
    })}
  }



}
