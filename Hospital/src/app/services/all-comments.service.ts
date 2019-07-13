import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AllCommentsService {

  constructor(
    public http: HttpClient
  ) {
  }

  getComments(doctor) {
    return this.http.get('http://localhost:3000/comment/' + doctor)
  }
}
