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

  CreateComment(comment) {
    return this.http.post('http://localhost:3000/comment/create', {text: comment.text, doctor_id:comment.doctor_id})
  }
}
