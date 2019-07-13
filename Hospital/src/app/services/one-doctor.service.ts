import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OneDoctorService implements OnInit{

  constructor(
    public http: HttpClient
  ) {
  }

  getDoctor(doctor) {
    return this.http.get('http://localhost:3000/doctor/one/' + doctor)
  }

  ngOnInit(): void {
  }
}
