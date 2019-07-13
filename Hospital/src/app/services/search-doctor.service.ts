import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchDoctorService {

  constructor(
    public http:HttpClient,

  ) {}
  getDoctors(name){
    return this.http.get('http://localhost:3000/doctor/search/name?search=' + name)
  }
}
