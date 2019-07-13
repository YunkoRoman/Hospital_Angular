import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class DoctorsService implements OnInit{

  constructor(
    public http:HttpClient
    
) {}
  getDoctors(department){
    return this.http.get('http://localhost:3000/doctor/' + department)
  }

  ngOnInit(): void {
  }
  
  
}
