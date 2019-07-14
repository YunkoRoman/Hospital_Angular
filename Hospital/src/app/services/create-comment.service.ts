import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CreateCommentService {

  constructor(
    public http: HttpClient
  ) {
  }

  CreateComment(text: string, doctor_id:number) {
    return this.http.post('http://localhost:3000/comment/create', {text, doctor_id})
  }
}
